import React from "react";
import { motion } from "framer-motion";

const fade = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const slideUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

const achievements = [
  "🥇 1st Rank – Smart India Hackathon (Internal)",
  "🎓 Infosys Springboard Program Graduate",
];

const certifications = [
  "✔️ Infosys Springboard Program Certificates",
  "✔️ Smart India Hackathon Participation",
];

const About = () => (
  <motion.section
    id="about"
    className="relative grid gap-14 lg:grid-cols-3 lg:gap-10 xl:gap-20 text-white p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    variants={fade}
  >
    {/* BIO TEXT */}
    <motion.div
      className="col-span-2 space-y-6"
      variants={slideUp}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>

      <div className="bg-white/10 border border-white/20 rounded-xl p-5 sm:p-6 shadow-md transition hover:scale-[1.01]">
        <h3 className="text-xl font-semibold mb-3 text-indigo-300">🎯 Career Objective</h3>
        <p className="text-base leading-relaxed text-white/90 sm:text-lg">
          I’m a passionate computer science student eager to turn ideas into impactful
          solutions. With a strong grasp of Java, Python, SQL, and modern frontend stacks,
          I thrive in team environments and love crafting clean, scalable code. My goal is to
          become a Java-based software engineer focused on innovation, performance, and user-centric design.
        </p>
      </div>
    </motion.div>

    {/* CARDS */}
    <div className="flex flex-col gap-6">
      {/* Achievements */}
      <motion.div
        className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg shadow-2xl ring-1 ring-white/10 transition hover:scale-[1.02]"
        variants={slideUp}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-white/90">🏆 Achievements</h3>
        <ul className="space-y-3 text-sm text-white/80">
          {achievements.map((item) => (
            <li key={item} className="flex gap-2 items-start">
              <span className="text-xl leading-none">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg shadow-2xl ring-1 ring-white/10 transition hover:scale-[1.02]"
        variants={slideUp}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-white/90">📜 Certifications</h3>
        <ul className="space-y-3 text-sm text-white/80">
          {certifications.map((item) => (
            <li key={item} className="flex gap-2 items-start">
              <span className="text-xl leading-none">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </motion.section>
);

export default About;
