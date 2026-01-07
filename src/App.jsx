import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import TechSpecs from './components/TechSpecs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white selection:bg-neon selection:text-black">
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <div className="text-xl font-bold font-mono text-neon">MV-X</div>
        <div className="hidden md:flex space-x-8 font-mono text-sm uppercase tracking-widest">
          <a href="#hero" className="hover:text-neon transition-colors">Base</a>
          <a href="#gallery" className="hover:text-neon transition-colors">Fleet</a>
          <a href="#tech" className="hover:text-neon transition-colors">Specs</a>
          <a href="#contact" className="hover:text-neon transition-colors">Comms</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Gallery />
        <TechSpecs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
