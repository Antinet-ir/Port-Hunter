# AntiNet

**AntiNet** is a robust Bash script that simplifies network scanning and reconnaissance. It automatically detects your network settings, performs mass scans on specified CIDR ranges using `masscan`, and conducts detailed `nmap` scans on live IPs — all while organizing the results for easy access and exporting structured data formats.

---

## 🚀 Features

- **Auto-Detection**: Automatically detects your network interface, IP address, gateway, and MAC address.
- **Mass Scanning**: Uses `masscan` to quickly scan entire CIDR ranges (supports custom rates and port ranges).
- **Flexible Nmap Scanning**:
  - Full detailed scan with `-sV -sC -p-`
  - Optional fast scan using the `-F` flag (top 100 ports)
- **Structured Output**: Results are saved in a time-stamped directory, organized per CIDR block.
- **CSV & JSON Exports**: Nmap scan results are automatically parsed and exported into `results.csv` and `results.json`.

---

## 🧰 Requirements

- `bash`
- `masscan`
- `nmap`
- `jq` (for JSON output)
- `libxml2-utils` (for `xmllint`, used in parsing)

Install dependencies with:

```bash
sudo apt-get update
sudo apt-get install -y masscan nmap jq libxml2-utils
```

---

## 📦 Installation

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

---

## 📖 Usage

Run the script with one or more CIDR ranges. Use the optional `-f` flag to enable fast Nmap scanning.

### Full Nmap Scan

```bash
./antiNet.sh 192.168.1.0/24
```

### Fast Nmap Scan (Top 100 Ports)

```bash
./antiNet.sh -f 192.168.1.0/24
```

You can specify multiple ranges:

```bash
./antiNet.sh -f 10.0.0.0/24 192.168.1.0/24
```

---

## 📂 Output Structure

Results are saved under a timestamped directory like `masscan_results/scan_20250418_145300`:

```
masscan_results/
└── scan_YYYYMMDD_HHMMSS/
    └── 192.168.1.0_24/
        ├── masscan.txt        # Raw Masscan output
        ├── live_hosts.txt     # List of live IPs
        ├── nmap_192.168.1.1.txt
        ├── nmap_192.168.1.1.xml
        ├── results.csv        # Combined scan summary (CSV)
        └── results.json       # Combined scan summary (JSON)
```

---

## 📊 Sample Output

### CSV

```csv
IP,Port,Protocol,Service,Product,Version
192.168.1.1,80,tcp,http,Apache,httpd 2.4.29
192.168.1.1,22,tcp,ssh,OpenSSH,7.6p1
```

### JSON

```json
[
  {
    "ip": "192.168.1.1",
    "port": "80",
    "protocol": "tcp",
    "service": "http",
    "product": "Apache",
    "version": "httpd 2.4.29"
  },
  ...
]
```

---

## ⚠️ Disclaimer

**AntiNet** is intended for **educational and ethical use only**. Scanning networks without permission may be illegal. The author assumes no responsibility for misuse. Always obtain explicit authorization before scanning any network.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! If you have ideas or improvements, feel free to open an issue or submit a PR.

---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.