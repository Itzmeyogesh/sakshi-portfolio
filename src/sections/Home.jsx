import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Send, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/Profile.jpg'; // ✅ Correct image import

const Home = () => {
  return (
    <motion.header
      id="home"
      className="min-h-fit flex flex-col items-center justify-center text-center px-4 py-4 sm:py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl font-display mx-auto max-w-5xl"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ Profile Image */}
      <img
        src={profileImage}
        alt="Sakshi Kale"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-4 ring-white/20 mb-4"
      />

      {/* Name, Role & Location */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Sakshi Kale
        </h1>

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
          className="text-base sm:text-lg md:text-xl font-semibold text-indigo-300 tracking-wide"
        />

        <p className="text-sm sm:text-base italic text-white/80">
          Baramati, Maharashtra
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-xs sm:text-sm text-white/80 space-y-1 mt-4">
        <p>📧 kalesakshi307@gmail.com | ☎ +91 9322171542</p>
        <div className="flex justify-center gap-3 mt-2">
          <a
            href="https://github.com/CodeDeveloper2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/sakshikale307"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <a
          href="/sakshi_resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold bg-white/10 text-white hover:bg-white/20 transition shadow ring-1 ring-white/20 backdrop-blur-md text-sm sm:text-base"
        >
          <ArrowDownToLine className="w-4 h-4" />
          Resume
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold bg-indigo-500 text-white hover:bg-indigo-600 transition shadow text-sm sm:text-base"
        >
          <Send className="w-4 h-4" />
          Contact Me
        </a>
      </div>

      {/* Career Objective */}
      <motion.p
        className="mt-8 sm:mt-10 max-w-3xl text-center text-white text-sm sm:text-base md:text-lg font-light leading-relaxed px-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 py-4 rounded-xl shadow-inner border border-white/10"
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
