import React from 'react';
import { motion } from 'framer-motion';
import Biodata from './Biodata';
import About from './About';
import Skills from './Skills';
import Projects from './projects';

function Landingpage() {
  return (
    // Wrapper: Sticky only applies on lg+, scroll freely on mobile
    <div className="w-full lg:flex lg:h-screen bg-[#0D152C]">
      
      {/* Left Section - Biodata (Sticky on large screens only) */}
      <motion.div
        className="w-full lg:w-1/2 bg-[#0D152C] px-4 py-6 lg:px-32 lg:py-16 lg:sticky lg:top-0 lg:h-screen"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Biodata />
      </motion.div>

      {/* Right Section - Scrollable on desktop, naturally scrolls on mobile */}
      <motion.div
        className="w-full lg:w-1/2 bg-[#0D152C] px-4 py-6 lg:px-16 lg:py-20 lg:overflow-y-auto"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <About />
        <Skills />
        <Projects />
      </motion.div>
    </div>
  );
}

export default Landingpage;
