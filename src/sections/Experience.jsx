// src/sections/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer Intern @ Technical One",
    date: "March 2025 – Present",
    location: "Pune, Maharashtra",
    points: [
      "Designed responsive web pages using React, HTML, CSS, and JavaScript.",
      "Worked on backend with Node.js, Express, and MySQL.",
    ],
  },
  {
    title: "HR Recruiter – Apprenticeship Program",
    date: "Jan 2025 – Present",
    location: "Chinchwad, Maharashtra",
    points: [
      "Sourced and recruited candidates for technical and vocational roles.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Experience = () => (
  <motion.section
    id="experience"
    className="p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl space-y-12"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.h2
      className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
      variants={fadeUp}
      custom={0}
    >
      📌 Experience
    </motion.h2>

    <div className="space-y-10 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-white/20">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          className="relative ml-10 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-white/10"
          custom={i + 1}
          variants={fadeUp}
        >
          {/* Timeline Dot */}
          <span className="absolute left-[-2.1rem] top-6 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm"></span>

          <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
          <p className="text-sm text-white/80 mb-3">
            📍 {exp.location} &nbsp; | &nbsp; 🗓️ {exp.date}
          </p>
          <ul className="list-disc list-inside text-white/90 text-sm space-y-1">
            {exp.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Experience;
