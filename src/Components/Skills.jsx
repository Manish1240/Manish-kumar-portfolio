import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: "C Language", icon: '/Manish-kumar-portfolio/c.png' },
    { name: 'HTML5', icon: '/Manish-kumar-portfolio/html.png' },
    { name: 'CSS3', icon: '/Manish-kumar-portfolio/css.png' },
    { name: 'Tailwind CSS', icon: '/Manish-kumar-portfolio/tailwindcss.png' },
    { name: 'JavaScript', icon: '/Manish-kumar-portfolio/javascript.png' },
    { name: 'React.js', icon: '/Manish-kumar-portfolio/react.png' },
    { name: 'Framer Motion', icon: '/Manish-kumar-portfolio/framer-motion.png' },
    { name: 'GSAP', icon: '/Manish-kumar-portfolio/gsap.png' },
    { name: 'Git', icon: '/Manish-kumar-portfolio/git.png' },
    { name: 'GitHub', icon: '/Manish-kumar-portfolio/github.png' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="px-4 py-12 flex flex-col gap-8 lg:pt-20 bg-[#0a192f] text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center">Skills</h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        variants={container}
      >
        {skills.map((skill, id) => (
          <motion.div
            key={id}
            variants={item}
            className="relative flex flex-col items-center justify-center bg-[#112240] p-4 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300 z-0" />
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2 z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
            />
            <p className="text-sm text-gray-300 group-hover:text-white transition z-10 text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
