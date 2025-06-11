// src/sections/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import chatImg from "../assets/chat-app.png";
import tributeImg from "../assets/tribute-page.png";
import signupImg from "../assets/signup-form.png";

const projectData = [
  {
    image: chatImg,
    title: "Chat App",
    description:
      "Real-time messaging app built with Node.js and Socket.io for instant communication between users.",
  },
  {
    image: tributeImg,
    title: "Tribute Page",
    description:
      "Responsive tribute page dedicated to Ratan Tata showcasing design using HTML and CSS.",
  },
  {
    image: signupImg,
    title: "Signup Page",
    description:
      "Clean and responsive signup form component built using modern frontend technologies.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => (
  <motion.section
    id="projects"
    className="p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl space-y-12"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ staggerChildren: 0.2 }}
  >
    <motion.h2
      className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
      variants={fadeUp}
    >
      💼 Projects
    </motion.h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((proj, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          transition={{ delay: index * 0.2 }}
          className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md ring-1 ring-white/10 shadow-xl hover:scale-[1.03] transition-transform"
        >
          <img
            src={proj.image}
            alt={proj.title}
            className="h-40 w-full object-cover"
          />
          <div className="p-5 space-y-3">
            <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
            <p className="text-sm text-white/80">{proj.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
