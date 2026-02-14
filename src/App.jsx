import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
        <Navbar />
        <Hero />
        <main className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32 pb-20">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <div className="max-w-7xl mx-auto px-6">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
