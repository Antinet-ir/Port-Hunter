import React, { useState } from 'react';
import { FolderTree, FileJson, FileText } from 'lucide-react';

const OutputExamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'structure' | 'csv' | 'json'>('structure');

  const outputStructure = `antinet_results/
└── scan_YYYYMMDD_HHMMSS/
    └── 192.168.1.0_24/
        ├── masscan.txt        # Raw Masscan output
        ├── live_hosts.txt     # List of live IPs
        ├── nmap_192.168.1.1.txt
        ├── nmap_192.168.1.1.xml
        ├── results.csv        # Combined scan summary (CSV)
        └── results.json       # Combined scan summary (JSON)`;

  const csvExample = `IP,Port,Protocol,Service,Product,Version
192.168.1.1,80,tcp,http,Apache,httpd 2.4.29
192.168.1.1,22,tcp,ssh,OpenSSH,7.6p1
192.168.1.5,443,tcp,https,nginx,1.18.0
192.168.1.10,3389,tcp,ms-wbt-server,Microsoft Terminal Services,`;

  const jsonExample = `[
  {
    "ip": "192.168.1.1",
    "port": "80",
    "protocol": "tcp",
    "service": "http",
    "product": "Apache",
    "version": "httpd 2.4.29"
  },
  {
    "ip": "192.168.1.1",
    "port": "22",
    "protocol": "tcp",
    "service": "ssh",
    "product": "OpenSSH",
    "version": "7.6p1"
  },
  {
    "ip": "192.168.1.5",
    "port": "443",
    "protocol": "tcp",
    "service": "https",
    "product": "nginx",
    "version": "1.18.0"
  }
]`;

  return (
    <section id="output" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Output Structure & Examples
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            AntiNet organizes scan results in a structured format with multiple export options
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('structure')}
                className={`flex items-center px-4 py-3 font-medium transition-colors ${
                  activeTab === 'structure' 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <FolderTree className="w-5 h-5 mr-2" />
                Directory Structure
              </button>
              <button
                onClick={() => setActiveTab('csv')}
                className={`flex items-center px-4 py-3 font-medium transition-colors ${
                  activeTab === 'csv' 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <FileText className="w-5 h-5 mr-2" />
                CSV Example
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`flex items-center px-4 py-3 font-medium transition-colors ${
                  activeTab === 'json' 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <FileJson className="w-5 h-5 mr-2" />
                JSON Example
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'structure' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Output Directory Structure</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Results are saved in a timestamped directory with a clear organizational structure:
                  </p>
                  <div className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      {outputStructure}
                    </pre>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    This structure makes it easy to reference results from different scan sessions and quickly access the information you need.
                  </p>
                </div>
              )}

              {activeTab === 'csv' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">CSV Output Format</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The CSV export provides a tabular view of discovered services that can be easily imported into spreadsheets:
                  </p>
                  <div className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      {csvExample}
                    </pre>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    CSV files are ideal for analysis in tools like Excel or for importing into databases for further processing.
                  </p>
                </div>
              )}

              {activeTab === 'json' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">JSON Output Format</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The JSON export provides structured data that can be easily parsed by scripts and other tools:
                  </p>
                  <div className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      {jsonExample}
                    </pre>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    JSON is perfect for integration with other security tools or for creating custom visualizations of scan results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputExamples;