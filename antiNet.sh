#!/bin/bash

# Function to check and install required packages
install_requirements() {
    echo "[*] Checking for required packages..."
    for package in masscan nmap; do
        if ! command -v $package &> /dev/null; then
            echo "[!] $package is not installed. Installing..."
            sudo apt-get install -y $package
            if [ $? -ne 0 ]; then
                echo "[!] Failed to install $package. Please install it manually."
                exit 1
            fi
        else
            echo "[+] $package is already installed."
        fi
    done
}

# Check if at least one CIDR is provided
if [ $# -lt 1 ]; then
    echo "Usage: $0 [-f] cidr1 [cidr2 ...]"
    exit 1
fi

# Check for the -f flag
FAST_SCAN=false
if [[ $1 == "-f" ]]; then
    FAST_SCAN=true
    shift  # Remove the -f flag from the arguments
fi

# Install required packages if not installed
install_requirements

RATE=50000
PORTS="1-65535"
BASE_DIR="masscan_results"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
SCAN_DIR="$BASE_DIR/scan_$TIMESTAMP"
mkdir -p "$SCAN_DIR"

INTERFACE=$(ip route | grep default | awk '{print $5}' | head -n 1)
SOURCE_IP=$(ip -4 addr show "$INTERFACE" | grep -oP '(?<=inet\s)\d+(\.\d+){3}' | head -n 1)
GATEWAY_IP=$(ip route | grep default | awk '{print $3}' | head -n 1)
ROUTER_MAC=$(arp -an | grep "$GATEWAY_IP" | awk '{print $4}' | head -n 1)

echo "[*] Interface       : $INTERFACE"
echo "[*] Source IP       : $SOURCE_IP"
echo "[*] Gateway IP      : $GATEWAY_IP"
echo "[*] Router MAC Addr : $ROUTER_MAC"
echo "[*] Scan output dir : $SCAN_DIR"
echo

if [[ -z "$ROUTER_MAC" ]]; then
    echo "[!] Router MAC not found. Try running 'ping $GATEWAY_IP' to populate ARP cache."
    exit 1
fi

for cidr in "$@"; do
    echo "[*] Scanning $cidr with masscan..."

    SAFE_CIDR=${cidr//\//_}
    CIDR_DIR="$SCAN_DIR/$SAFE_CIDR"
    mkdir -p "$CIDR_DIR"
    MASSCAN_OUT="$CIDR_DIR/masscan.txt"
    LIVE_IPS="$CIDR_DIR/live_hosts.txt"

    masscan "$cidr" -p"$PORTS" --rate="$RATE" \
        --source-ip "$SOURCE_IP" \
        --router-mac "$ROUTER_MAC" \
        --adapter "$INTERFACE" \
        -oG "$MASSCAN_OUT"

    grep 'Ports:' "$MASSCAN_OUT" | awk '{print $2}' | sort -u > "$LIVE_IPS"

    echo "[+] Live hosts saved to $LIVE_IPS"

    while IFS= read -r ip; do
        echo "[*] Running nmap scan on $ip"
        
        if $FAST_SCAN; then
            nmap -Pn -F -oN "$CIDR_DIR/nmap_$ip.txt" "$ip"
        else
            nmap -Pn -sV -sC -T4 -p- -oN "$CIDR_DIR/nmap_$ip.txt" "$ip"
        fi
    done < "$LIVE_IPS"

    echo "[+] Nmap scans completed for $cidr"
    echo
done

echo "[*] Final result structure:"
tree "$SCAN_DIR"
