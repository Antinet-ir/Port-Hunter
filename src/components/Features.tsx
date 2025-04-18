import React from 'react';
import { Search, Zap, FileJson, FolderTree, Shield, Network, Laptop, Database } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Network className="w-6 h-6 text-blue-500" />,
      title: 'Auto-Detection',
      description: 'Automatically detects your network interface, IP address, gateway, and MAC address.',
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Mass Scanning',
      description: 'Uses masscan to quickly scan entire CIDR ranges with custom rates and port ranges.',
    },
    {
      icon: <Search className="w-6 h-6 text-purple-500" />,
      title: 'Flexible Nmap Scanning',
      description: 'Detailed service detection scans with version detection or fast scanning options.',
    },
    {
      icon: <FolderTree className="w-6 h-6 text-green-500" />,
      title: 'Structured Output',
      description: 'Results saved in a time-stamped directory, neatly organized per CIDR block.',
    },
    {
      icon: <FileJson className="w-6 h-6 text-yellow-500" />,
      title: 'CSV & JSON Exports',
      description: 'Nmap scan results automatically parsed and exported into structured formats.',
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Security Focus',
      description: 'Built for security professionals with ethical use guidelines and best practices.',
    },
    {
      icon: <Laptop className="w-6 h-6 text-indigo-500" />,
      title: 'Cross-Platform',
      description: 'Runs on Linux systems with standard networking tools and dependencies.',
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-500" />,
      title: 'Data Organization',
      description: 'Intelligent output management with clean formatting and clear file structure.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Powerful Features for Network Reconnaissance
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            AntiNet combines multiple tools and techniques to provide a comprehensive network scanning solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Built for Security Professionals
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            AntiNet streamlines the reconnaissance phase of security assessments, providing comprehensive network insights in structured formats.
          </p>
          <a 
            href="#installation" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-block"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;