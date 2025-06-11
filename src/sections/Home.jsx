// src/sections/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Send, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <motion.header
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl font-display"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Sakshi Kale"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-4 ring-white/20"
      />

      {/* Name, Role & Location */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Sakshi Kale
        </h1>

        {/* Typing Role Effect */}
        <TypeAnimation
          sequence={[
            'Aspiring Full Stack Developer',
            2000,
            'MERN Stack Enthusiast',
            2000,
            'Frontend & Backend Developer',
            2000,
          ]}
          speed={50}
          wrapper="p"
          repeat={Infinity}
          className="text-lg md:text-xl font-semibold text-indigo-300 tracking-wide"
        />

        <p className="text-base md:text-lg italic text-white/80">
          Baramati, Maharashtra
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-white/80 space-y-1">
        <p>📧 kalesakshi307@gmail.com | ☎ +91 9322171542</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/CodeDeveloper2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/sakshikale307"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <a
          href="/sakshi_resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold bg-white/10 text-white hover:bg-white/20 transition shadow ring-1 ring-white/20 backdrop-blur-md"
        >
          <ArrowDownToLine className="w-4 h-4" />
          Resume
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold bg-indigo-500 text-white hover:bg-indigo-600 transition shadow"
        >
          <Send className="w-4 h-4" />
          Contact Me
        </a>
      </div>

      {/* Career Objective */}
      <motion.p
        className="mt-10 max-w-3xl text-center text-white text-base md:text-lg font-light leading-relaxed px-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 py-4 rounded-xl shadow-inner border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="font-medium text-indigo-300">Career Objective:</span>{' '}
        I am a passionate and dedicated Computer Science student with hands-on
        experience in full-stack web development, data analytics, and
        collaborative problem solving. I strive to build user-centric,
        efficient, and innovative solutions that leave a lasting impact.
      </motion.p>
    </motion.header>
  );
};

export default Home;
