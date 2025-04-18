import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Usage from './components/Usage';
import OutputExamples from './components/OutputExamples';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'AntiNet - Network Reconnaissance Tool';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Usage />
        <OutputExamples />
      </main>
      <Footer />
    </div>
  );
}

export default App;