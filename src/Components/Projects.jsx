import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Modern Animated Website",
      image: "/project1.png",
      description: "A modern, animated portfolio website built for large devices using HTML, CSS, JavaScript, GSAP, and slider.js.",
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Slider.js'],
      demoLink: "https://manish1240.github.io/Fully-Animated-and-responsive-website/",
      codeLink: "https://github.com/Manish1240/Fully-Animated-and-responsive-website/"
    },
    {
      title: "Cynthia Ugwu portfolio",
      image: "/project2.png",
      description: "A modern, animated portfolio website built for large device only cause i used hover animations mostly and pointer animations which works on pc and laptops",
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'locomotive.js'],
      demoLink: "https://manish1240.github.io/Cynthia-ugwu-portfolio-web/",
      codeLink: "https://github.com/Manish1240/Cynthia-ugwu-portfolio-web"
    },
    {
      title: "ROCK-PAPER-SESSIOR-GAME",
      image: "/project3.png",
      description: "this game project for understanding the some good concepts of javascript like random numbers and best practice of arrays as usuall",
      tech: ['HTML', 'CSS', 'JavaScript'],
      demoLink: "https://manish1240.github.io/rock-paper-sessior-game/",
      codeLink: "https://github.com/Manish1240/rock-paper-sessior-game"
    }
    // Add more projects here when ready
  ];

  return (
    <motion.div
      className="text-white py-10 px-4 lg:px-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4 border border-[#233554]"
            />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-teal-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#1c2b44] text-white rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
