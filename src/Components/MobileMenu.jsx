import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FolderGit2, Mail, Compass, X } from 'lucide-react'; // <-- Imported X icon

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 12 },
    },
    exit: {
      x: '100%',
      transition: { duration: 0.4 },
    },
  };

  const links = [
    { href: '#skills', label: 'Skills', icon: <Code2 size={18} /> },
    { href: '#projects', label: 'Projects', icon: <FolderGit2 size={18} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Floating Menu Button */}
       <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-emerald-500 hover:bg-emerald-600 p-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300"
      >
        <Compass
          size={24}
          className="text-white drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]"
        />
      </motion.button>

      {/* Overlay + Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-2/3 bg-[#0a192f] shadow-lg z-50 flex flex-col items-center justify-center space-y-8"
            >
              {/* Close Button (X Icon) - New Addition */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-400 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={30} />
              </motion.button>
              
              {links.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{
                    x: 8,
  scale: 1.07,
  color: '#34d399', // ✅ use hex color only
  textShadow: '0 0 8px rgba(52, 211, 153, 0.7)', // ✅ safe glow effect
                  }}className="flex items-center space-x-3 text-[#cbd5e1] text-lg font-medium transition-colors"


                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                  >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;