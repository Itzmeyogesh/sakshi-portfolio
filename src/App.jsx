import React, { useState, useEffect } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import Sidebar from './components/sidebar';

import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`relative flex min-h-screen ${
        darkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white'
      } transition-all duration-500 font-cool`}
    >
      {/* Sidebar */}
      <motion.div
        className="w-[70px] sm:w-[80px] md:w-[100px] fixed top-0 left-0 h-full z-50"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Sidebar scrollToSection={scrollToSection} />
      </motion.div>

      {/* Main Content */}
      <div className="ml-[70px] sm:ml-[80px] md:ml-[100px] w-full px-4 sm:px-6 py-6 space-y-16">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-full shadow-md z-50"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Sections */}
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        {/* Footer */}
<footer className="pt-16 border-t border-white/20">
  <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8">
    {/* Name & Credit */}
    <p className="text-sm text-white/80 mb-4 md:mb-0">
      © 2025 <span className="font-semibold text-white">Sakshi Kale</span>. Built with ❤️ using <span className="underline underline-offset-2">React</span> + <span className="underline underline-offset-2">TailwindCSS</span>.
    </p>

    {/* Social Icons */}
    <div className="flex space-x-4">
      <a href="https://github.com/CodeDeveloper2004" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 hover:text-white">
          <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.8-.7.8-.7-.2-.6-.6-1-.6-1-2.6-.3-3.6-1.2-3.6-2.8 0-.6.3-1.1.7-1.5-.1-.2-.3-1 .1-2.2 0 0 .8-.2 2.5 1 .7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.7-1.2 2.5-1 2.5-1 .4 1.2.2 2 .1 2.2.5.4.7.9.7 1.5 0 1.6-1 2.5-3.6 2.8.3.3.6.8.6 1.5v2.2c0 .3.2.7.8.6A12 12 0 0012 0z"/>
        </svg>
      </a>
      <a href="https://linkedin.com/in/sakshikale307" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400 hover:text-white">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.8h.05c.5-.9 1.8-1.8 3.7-1.8 3.9 0 4.6 2.5 4.6 5.7V20h-4v-5.7c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20h-4V8z"/>
        </svg>
      </a>
      <a href="mailto:kalesakshi307@gmail.com" className="hover:scale-110 transition-transform">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-red-400 hover:text-white">
          <path d="M12 13.2L0 6.3V4l12 6.9L24 4v2.3l-12 6.9zM0 8.4v11.2c0 .9.7 1.4 1.6 1.4h20.8c.9 0 1.6-.6 1.6-1.4V8.4l-12 6.9L0 8.4z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
}

export default App;
