import React from 'react';
import { Github, Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Terminal className="w-8 h-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">AntiNet</span>
            </div>
            <p className="mt-2 text-gray-400 max-w-md">
              A robust Bash script that simplifies network scanning and reconnaissance for security professionals.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/hosseinMsh/AntiNet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              Licensed under the MIT License
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the security community
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            ⚠️ Disclaimer: AntiNet is intended for educational and ethical use only. Scanning networks without permission may be illegal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;