import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-display font-bold tracking-widest text-primary dark:text-background-light">
          PRIMADONNA
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a className="hover:text-primary dark:hover:text-white transition-colors" href="#services">Services</a>
          <a className="hover:text-primary dark:hover:text-white transition-colors" href="#gallery">Gallery</a>
          <a className="hover:text-primary dark:hover:text-white transition-colors" href="#about">About</a>
          <a className="hover:text-primary dark:hover:text-white transition-colors" href="#contact">Contact</a>
        </nav>
        <a className="hidden md:inline-block bg-primary text-white dark:text-background-light px-6 py-2 rounded-lg hover:opacity-90 transition-opacity" href="#contact">Book Now</a>
        <button className="md:hidden">
          <span className="material-icons-outlined">
            menu
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;



