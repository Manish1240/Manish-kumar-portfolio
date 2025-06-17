import React from 'react';
import { motion } from 'framer-motion';
import Biodata from './Biodata';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import MessageForm from './MessageForm';

function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#0a192f] text-white">
      {/* Left Side - Fixed on large screens */}
      <motion.div
        className="w-full lg:w-1/2 px-6 py-10 lg:px-20 lg:py-16 lg:sticky lg:top-0 h-auto lg:h-screen bg-[#0a192f]"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Biodata />
      </motion.div>

      {/* Right Side - Scrollable content on large, full height on mobile */}
      <motion.div
        className="w-full lg:w-1/2 px-6 py-10 lg:px-16 lg:py-20 space-y-16 bg-[#0a192f]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <Projects />
          <MessageForm />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
