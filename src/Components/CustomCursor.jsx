import React, { useState } from 'react';
import Landingpage from './Landingpage';
import { motion } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-[#0D152C] text-white'}>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded transition duration-300 hover:bg-gray-600"
      >
        Toggle Theme
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Landingpage />
      </motion.div>
    </div>
  );
}

export default CustomCursor;
