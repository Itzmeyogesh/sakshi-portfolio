// src/sections/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Trainee Full Stack Developer @ Purple Radiance Pvt Ltd",
    date: "Nov 2025 – Present",
    location: "Pune District, Maharashtra, India",
    points: [
      "Developing and maintaining RESTful APIs using Spring Boot.",
      "Implementing business logic using Core Java.",
      "Building and enhancing frontend components using React.",
      "Integrating frontend interfaces with backend APIs.",
      "Debugging and fixing application issues for better performance.",
      "Collaborating with team members during development lifecycle.",
      "Working on Java Development and Front-End Development projects.",
    ],
  },
  {
    title: "Web Developer Intern @ Technical One",
    date: "March 2025 – September 2025",
    location: "Pune, Maharashtra",
    points: [
      "Designed responsive web pages using React, HTML, CSS, and JavaScript.",
      "Worked on backend development using Node.js, Express.js, and MySQL.",
      "Built modern UI components and optimized website responsiveness.",
      "Collaborated with team members on real-time projects.",
    ],
  },
  {
    title: "HR Recruiter – Apprenticeship Program",
    date: "Jan 2025 – March 2025",
    location: "Chinchwad, Maharashtra",
    points: [
      "Sourced and recruited candidates for technical and vocational roles.",
      "Managed interview scheduling and candidate communication.",
      "Maintained hiring records and recruitment reports.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl space-y-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
        variants={fadeUp}
        custom={0}
      >
        💼 Experience
      </motion.h2>

      {/* Timeline */}
      <div className="space-y-10 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-white/20">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative ml-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-white/10 hover:scale-[1.02] transition duration-300"
            custom={i + 1}
            variants={fadeUp}
          >
            {/* Timeline Dot */}
            <span className="absolute left-[-2.1rem] top-7 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-md"></span>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2">
              {exp.title}
            </h3>

            {/* Date & Location */}
            <p className="text-sm text-white/70 mb-4">
              📍 {exp.location} &nbsp; | &nbsp; 🗓️ {exp.date}
            </p>

            {/* Points */}
            <ul className="list-disc list-inside text-white/90 text-sm space-y-2 leading-relaxed">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
