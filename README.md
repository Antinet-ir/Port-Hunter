# AntiNet

AntiNet is a robust Bash script that simplifies network scanning and reconnaissance. It automatically detects your network settings, performs mass scans on specified CIDR ranges, and conducts detailed nmap scans on live IPs, all while organizing the results for easy access.

## Features

- **Auto-Detection**: Automatically detects your network interface, MAC address, and IP address.
  
- **Mass Scanning**: Utilizes `masscan` to quickly scan specified CIDR ranges for live hosts.
  
- **Flexible Nmap Scanning**: 
  - Perform a full `nmap` scan on all ports.
  - Optionally, run a fast `nmap` scan on the top 100 ports using the `-F` flag.
  
- **Organized Output**: Saves all scan results in a structured folder hierarchy for easy navigation.

## Requirements

- Bash
- masscan
- nmap

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hosseinMsh/AntiNet.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AntiNet
   ```

3. Make the script executable:
   ```bash
   chmod +x antiNet.sh
   ```

## Usage

Run the script with the desired CIDR range as an argument. You can also use the `-f` flag for a fast scan.

### Full Nmap Scan
```bash
./antiNet.sh 192.168.1.0/24
```

### Fast Nmap Scan (Top 100 Ports)
```bash
./antiNet.sh -f 192.168.1.0/24
```

## Output

- The results will be stored in a folder named after the CIDR range you scanned, containing:
  - Live IP addresses
  - nmap scan results for each IP

## Disclaimer

**AntiNet** is intended for educational and ethical use only. The author does not accept any responsibility for misuse or illegal activities conducted with this script. By using this tool, you agree to comply with all applicable laws and regulations regarding network scanning and security. Always obtain proper authorization before scanning any network.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
