import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechInterests from './components/sections/TechInterests';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import ParticlesBackground from './components/ui/ParticlesBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="bg-mesh" />
      <ParticlesBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechInterests />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-xs backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </div>
          <div className="flex gap-8 text-white/60 text-sm font-medium">
            <a href="#" className="hover:text-accent-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-accent-primary transition-colors">About</a>
            <a href="https://github.com/thedilipsinghh" target="_blank" className="hover:text-accent-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
