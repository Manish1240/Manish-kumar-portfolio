import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const baseUrl = import.meta.env.BASE_URL;
  const projects = [
    {
      title: "Product Store AdminPage",
      image: `${baseUrl}product_store.png`,
      description: "This project is based on basic CRUD operations of MongoDB with smooth and cool animations using Framer Motion.",
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      demoLink: "https://product-store-admin.vercel.app/",
      codeLink: "https://github.com/Manish1240/Product-Store-AdminPage"
    },
    {
      title: "Task Management WebApp",
      image: `${baseUrl}project4.png`,
      description: "A React-based task management app. Use credentials like Admin1240@gmail.com (password: Admin1240) to test.",
      tech: ['React', 'TailwindCSS'],
      demoLink: "https://task-management-webapp-nine.vercel.app/",
      codeLink: "https://github.com/Manish1240/Task_management_webapp"
    },
    {
      title: "Modern Animated Website",
      image: `${baseUrl}project1.png`,
      description: "A modern, animated portfolio website built using HTML, CSS, JavaScript, GSAP, and slider.js.",
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Slider.js'],
      demoLink: "https://manish1240.github.io/Fully-Animated-and-responsive-website/",
      codeLink: "https://github.com/Manish1240/Fully-Animated-and-responsive-website.git"
    },
    {
      title: "Cynthia Ugwu Portfolio",
      image: `${baseUrl}project2.png`,
      description: "A visually engaging desktop portfolio with hover and pointer animations using GSAP and Locomotive.js.",
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive.js'],
      demoLink: "https://manish1240.github.io/Cynthia-ugwu-portfolio-web/",
      codeLink: "https://github.com/Manish1240/Cynthia-ugwu-portfolio-web.git"
    },
  ];

  return (
    <motion.div
      className="text-white py-12 px-4 sm:px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid gap-8 max-w-4xl mx-auto grid-cols-1">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 sm:h-64 object-cover rounded-lg mb-4 border border-[#233554]"
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
            <div className="flex gap-4 text-sm">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
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
