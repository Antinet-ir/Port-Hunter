import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Network, Shield, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const generateRandomIP = () => {
  const randomNum = () => Math.floor(Math.random() * 255) + 1;
  return `${randomNum()}.${randomNum()}.${randomNum()}.${randomNum()}`;
};

const terminalLines = [
  '$ ./antiNet.sh 192.168.1.0/24',
  '[+] Network interface: eth0',
  '[+] Your IP address: 192.168.1.100',
  '[+] Gateway: 192.168.1.1',
  '[+] MAC address: 00:11:22:33:44:55',
  '[+] Starting masscan on 192.168.1.0/24',
  '[+] Found 3 live hosts',
  '[+] Starting nmap scan for 192.168.1.1',
  '[+] Port 80 (http): Apache httpd 2.4.29',
  '[+] Port 22 (ssh): OpenSSH 7.6p1',
  '[+] Scan complete! Results saved to antinet_results/scan_20250418_145300/',
  `[+] Found live host: ${generateRandomIP()}`,
  `[+] Found live host: ${generateRandomIP()}`,
  `[+] Found live host: ${generateRandomIP()}`,
];

const Hero: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, terminalLines[index]]);
      index++;
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
      if (index === terminalLines.length) clearInterval(interval);
    }, 300);

    const audio = new Audio('/sounds/type.mp3');
    audio.volume = 0.2;
    const playSound = () => audio.play().catch(() => {});
    const soundInterval = setInterval(() => {
      if (index < terminalLines.length) playSound();
    }, 100);

    return () => clearInterval(soundInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => prev.slice(0, prev.length - 3)); // حذف ۳ خط آخر (که IP‌ها هستند)
    }, 5000); // بعد از ۵ ثانیه حذف می‌شوند

    return () => clearTimeout(timeout);
  }, [displayedLines]);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
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
            <div className="w-full h-80 sm:h-96 bg-black rounded-lg shadow-xl overflow-hidden border border-green-400">
              <div className="flex items-center bg-green-950 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-green-400 text-sm">root@antinet:~#</div>
              </div>
              <div ref={terminalRef} className="p-4 font-mono text-sm text-green-400 overflow-y-auto h-full whitespace-pre-wrap">
                <AnimatePresence>
                  {displayedLines.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </AnimatePresence>
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
