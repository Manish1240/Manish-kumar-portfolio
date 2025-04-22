import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: "C-lang", icon: '/c.png' },
    { name: 'HTML5', icon: '/html.png' },
    { name: 'CSS3', icon: '/css.png' },
    { name: 'TailwindCSS', icon: '/tailwindcss.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'React', icon: '/react.png' },
    { name: 'Framer Motion', icon: '/framer-motion.png' },
    { name: 'GSAP Animations', icon: '/gsap.png' },
    { name: 'Git Tool', icon: '/git.png' },
    { name: 'GitHub', icon: '/github.png' }
  ];

  return (
    <motion.div
      className="px-4 py-12 flex flex-col gap-8 lg:pt-20 bg-[#0a192f] text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, id) => (
          <motion.div
            key={id}
            className="relative flex flex-col items-center justify-center bg-[#112240] p-4 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300 z-0"></div>

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
      </div>
    </motion.div>
  );
}

export default Skills;
