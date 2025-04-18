import React from 'react';
import { Terminal, Network, Shield, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-600 via-violet-500 to-purple-600 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50"></div>
              <div className="relative flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full">
                <Terminal className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="text-blue-500">Anti</span>Net
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              A powerful network reconnaissance tool that automates scanning, detection, and information gathering for security professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#installation" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a 
                href="https://github.com/hosseinMsh/AntiNet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 sm:h-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="flex items-center bg-gray-900 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">Terminal</div>
              </div>
              <div className="p-4 font-mono text-sm text-green-400 animate-typing overflow-hidden whitespace-pre-wrap">
                <p>$ ./antiNet.sh 192.168.1.0/24</p>
                <p className="mt-2">[+] Network interface: eth0</p>
                <p>[+] Your IP address: 192.168.1.100</p>
                <p>[+] Gateway: 192.168.1.1</p>
                <p>[+] MAC address: 00:11:22:33:44:55</p>
                <p className="mt-2">[+] Starting masscan on 192.168.1.0/24</p>
                <p>[+] Found 3 live hosts</p>
                <p className="mt-2">[+] Starting nmap scan for 192.168.1.1</p>
                <p>[+] Port 80 (http): Apache httpd 2.4.29</p>
                <p>[+] Port 22 (ssh): OpenSSH 7.6p1</p>
                <p className="mt-2">[+] Scan complete! Results saved to antinet_results/scan_20250418_145300/</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-transform hover:scale-105">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
              <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Auto-Detection</h3>
            <p className="text-gray-600 dark:text-gray-300">Automatically detects network interfaces, IP addresses, and gateway information.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-transform hover:scale-105">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Flexible Scanning</h3>
            <p className="text-gray-600 dark:text-gray-300">Combines masscan for speed with nmap for thorough enumeration of services.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-transform hover:scale-105">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-lg mb-4">
              <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Structured Output</h3>
            <p className="text-gray-600 dark:text-gray-300">Organized results with JSON and CSV exports for easy integration with other tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;