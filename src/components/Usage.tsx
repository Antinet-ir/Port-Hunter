import React, { useState } from 'react';
import { Copy, Check, AlertTriangle } from 'lucide-react';

const Usage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const usageExamples = [
    {
      id: 'full-scan',
      title: 'Full Nmap Scan',
      command: './antiNet.sh 192.168.1.0/24',
      description: 'Complete scan with version detection (-sV) and default scripts (-sC) on all ports.'
    },
    {
      id: 'fast-scan',
      title: 'Fast Nmap Scan (Top 100 Ports)',
      command: './antiNet.sh -f 192.168.1.0/24',
      description: 'Quick scan using the -f flag to limit to the top 100 ports for faster results.'
    },
    {
      id: 'multiple-ranges',
      title: 'Multiple CIDR Ranges',
      command: './antiNet.sh -f 10.0.0.0/24 192.168.1.0/24',
      description: 'Scan multiple network ranges in a single command with fast scanning enabled.'
    }
  ];

  return (
    <section id="usage" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Usage
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            AntiNet offers flexible scanning options for different reconnaissance scenarios
          </p>

          <div className="space-y-8">
            {usageExamples.map(example => (
              <div key={example.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{example.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{example.description}</p>
                </div>
                <div className="relative bg-gray-900 p-4">
                  <pre className="font-mono text-green-400 text-sm overflow-x-auto">
                    {example.command}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(example.command, example.id)}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied === example.id ? 
                      <Check className="w-4 h-4 text-green-500" /> : 
                      <Copy className="w-4 h-4 text-gray-400" />
                    }
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Disclaimer</h3>
                  <p className="text-amber-700 dark:text-amber-400">
                    AntiNet is intended for <strong>educational and ethical use only</strong>. Scanning networks without permission may be illegal. 
                    Always obtain explicit authorization before scanning any network.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Command-Line Options</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-sm mr-2">-f</code>
                  <span>Enable fast scanning (top 100 ports only)</span>
                </li>
                <li className="flex items-start">
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-sm mr-2">CIDR ranges</code>
                  <span>One or more network ranges in CIDR notation (e.g., 192.168.1.0/24)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;