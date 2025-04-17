#!/bin/bash

if [ $# -lt 1 ]; then
    echo "Usage: $0 cidr1 [cidr2 ...]"
    exit 1
fi

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
        nmap -Pn -sV -sC -T4 -p- -oN "$CIDR_DIR/nmap_$ip.txt" "$ip"
    done < "$LIVE_IPS"

    echo "[+] Nmap scans completed for $cidr"
    echo
done

echo "[*] Final result structure:"
tree "$SCAN_DIR"
