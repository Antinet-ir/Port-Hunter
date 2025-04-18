import React, { useState } from 'react';
import { Copy, Check, Download, Terminal, Package } from 'lucide-react';

const Installation: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeBlocks = [
    {
      id: 'dependencies',
      title: 'Install Dependencies',
      code: 'sudo apt-get update\nsudo apt-get install -y masscan nmap jq libxml2-utils',
      icon: <Package className="w-5 h-5" />,
    },
    {
      id: 'clone',
      title: 'Clone Repository',
      code: 'git clone https://github.com/hosseinMsh/AntiNet.git',
      icon: <Download className="w-5 h-5" />,
    },
    {
      id: 'navigate',
      title: 'Navigate & Make Executable',
      code: 'cd AntiNet\nchmod +x antiNet.sh',
      icon: <Terminal className="w-5 h-5" />,
    },
  ];

  return (
    <section id="installation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Installation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            Get up and running with AntiNet in just a few simple steps
          </p>

          <div className="space-y-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">bash</code> - For script execution</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">masscan</code> - For rapid port scanning</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">nmap</code> - For detailed service enumeration</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">jq</code> - For JSON output processing</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">libxml2-utils</code> - For XML parsing (provides xmllint)</li>
              </ul>
            </div>

            {codeBlocks.map(block => (
              <div key={block.id} className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-2">
                  <div className="flex items-center space-x-2">
                    {block.icon}
                    <span className="font-medium text-gray-800 dark:text-white">{block.title}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(block.code, block.id)}
                    className="p-1.5 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied === block.id ? 
                      <Check className="w-4 h-4 text-green-500" /> : 
                      <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    }
                  </button>
                </div>
                <div className="p-4 bg-gray-900">
                  <pre className="text-green-400 font-mono whitespace-pre-wrap text-sm overflow-x-auto">
                    {block.code}
                  </pre>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Ready to Use</h3>
              <p className="text-blue-700 dark:text-blue-400">
                Once installed, AntiNet is ready to use. Check out the Usage section below to start scanning networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;