// src/sections/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl space-y-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold tracking-tight sm:text-4xl text-white text-center"
        variants={fadeUp}
      >
        📬 Get in Touch
      </motion.h2>

      {/* Info Cards */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={fadeUp}
      >
        {[
          {
            icon: <Mail className="w-6 h-6 text-indigo-400" />,
            text: "kalesakshi307@gmail.com",
          },
          {
            icon: <Phone className="w-6 h-6 text-pink-400" />,
            text: "+91 9322171542",
          },
          {
            icon: <MapPin className="w-6 h-6 text-green-400" />,
            text: "Baramati, Maharashtra",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 p-5 rounded-xl bg-white/10 backdrop-blur-lg shadow ring-1 ring-white/20"
            custom={i}
            variants={fadeUp}
          >
            {item.icon}
            <span className="text-sm text-white/90">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        className="max-w-3xl mx-auto space-y-6 bg-white/10 p-8 rounded-2xl shadow ring-1 ring-white/20 backdrop-blur"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1 text-white/80">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/5 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-white/80">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/5 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1 text-white/80">Your Message</label>
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/5 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
