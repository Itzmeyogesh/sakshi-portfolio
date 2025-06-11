// src/sections/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Brain, Languages } from "lucide-react";

const categories = [
  {
    title: "Programming & Web",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    skills: [
      { name: "Java", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "JSP/Servlet", level: 80 },
    ],
  },
  {
    title: "Core & Scripting",
    icon: <Terminal className="w-5 h-5 text-pink-400" />,
    skills: [
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
      { name: "DSA", level: 80 },
      { name: "MySQL", level: 88 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Brain className="w-5 h-5 text-yellow-400" />,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Time Management", level: 92 },
    ],
  },
  {
    title: "Languages",
    icon: <Languages className="w-5 h-5 text-green-400" />,
    skills: [
      { name: "English", level: 95 },
      { name: "Hindi", level: 90 },
      { name: "Marathi", level: 100 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => (
  <motion.section
    id="skills"
    className="p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl space-y-16"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ staggerChildren: 0.2 }}
  >
    <motion.h2
      className="text-3xl font-bold tracking-tight sm:text-4xl text-white text-center"
      variants={fadeUp}
    >
      💻 Skills
    </motion.h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className="rounded-2xl p-6 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl shadow-lg ring-1 ring-white/10 transition-transform transform hover:scale-105"
        >
          <div className="flex items-center gap-3 mb-4 text-white">
            {category.icon}
            <h3 className="text-xl font-semibold tracking-wide">
              {category.title}
            </h3>
          </div>
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-white/90 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
