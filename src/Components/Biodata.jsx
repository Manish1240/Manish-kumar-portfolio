import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Code2, FolderGit2, Mail } from 'lucide-react'; // icons for Skills, Projects, Contact
import TextType from './TextType';

function Biodata() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
      <motion.h1
        className="text-4xl lg:text-5xl font-bold text-emerald-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TextType 
  text={["Hi, I'm Manish Kumar"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

      </motion.h1>

      <motion.p
        className="text-lg max-w-xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A passionate Frontend Developer crafting modern, animated, and responsive websites using HTML, CSS, JS, React, Tailwind CSS, and more.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="https://github.com/Manish1240" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-gray-300 hover:text-emerald-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/manish-kumar-65165a327" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-gray-300 hover:text-emerald-400 transition" />
        </a>
        <a href="https://x.com/sonwani38256" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl text-gray-300 hover:text-emerald-400 transition" />
        </a>
        <a href="https://www.facebook.com/manishkumar.98263/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl text-gray-300 hover:text-emerald-400 transition" />
        </a>
      </motion.div>

      {/* Desktop Vertical Quick Links */}
      <motion.div
        className="hidden md:flex flex-col items-center space-y-4 mt-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {[
          { href: '#skills', label: 'Skills', icon: <Code2 size={18} /> },
          { href: '#projects', label: 'Projects', icon: <FolderGit2 size={18} /> },
          { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            whileHover={{
              x: 6,
              scale: 1.05,
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              boxShadow: '0 0 10px rgba(16,185,129,0.3)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)',
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.97 }}
        className="inline-block mt-6 px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold tracking-wide shadow-md hover:bg-emerald-600 transition-all duration-300"
      >
        🚀 Want to Hire Me?
      </motion.a>
    </div>
  );
}

export default Biodata;
