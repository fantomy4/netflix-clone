import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center py-6 relative z-10'>
      <p className='text-neutral-400 text-xs tracking-wider'>
        Created By <span className='text-white font-bold'>Netflix Team</span>
      </p>

      <div className='absolute inset-0 bg-neutral-600 bg-opacity-25 backdrop-blur-md -z-10'></div>

      <div className='absolute top-0 left-0 w-full h-full border-neutral-500 border-opacity-40 rounded-2xl'></div>
    </footer>
  );
};

export default Footer;