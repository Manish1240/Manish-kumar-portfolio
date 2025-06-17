import React from 'react';
import MessageForm from './MessageForm';

function AEC() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#hireme', label: 'Contact' },
  ];

  return (
    <div className='lg:flex flex-col py-16 px-8 text-zinc-400 gap-4 hidden animate-slide-in'>
      {links.map((link, index) => (
        <div
          key={index}
          className='group flex items-center gap-2 capitalize text-sm transition-transform duration-300 ease-in-out hover:scale-105'
        >
          <div className='w-8 h-0.5 bg-zinc-400 group-hover:bg-white transition-all duration-300'></div>
          <a
            href={link.href}
            className='transition-colors duration-300 group-hover:text-white'
          >
            {link.label}
          </a>
        </div>
      ))}

      {/* Message Form Section */}
      <div id="hireme" className="mt-6">
        <MessageForm />
      </div>
    </div>
  );
}

export default AEC;
