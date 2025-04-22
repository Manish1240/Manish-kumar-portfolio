import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      className="px-3 flex flex-col gap-2 mt-0 lg:pt-2 pt-4" // Reduced mobile padding top
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl text-white font-semibold">About</h2>
      <p className="text-md text-zinc-400 tracking-normal">
        Hey! I'm Manish Kumar, a passionate frontend developer with a strong interest in creating modern, responsive, and interactive websites. I love bringing designs to life using HTML, CSS, JavaScript, React, and animation libraries like GSAP and Locomotive Scroll.
        <br />
        I'm currently a college student, actively building real-world projects to improve my skills and create a strong portfolio. I’ve already built a few animated websites and am now focusing on React projects to take things to the next level.
        <br />
        My goal is to become a professional web developer, work with real clients, and eventually explore backend development and the full MERN stack.
        Let’s build something amazing together!
      </p>
    </motion.div>
  );
}

export default About;
