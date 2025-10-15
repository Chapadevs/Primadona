import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white dark:text-background-light">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="font-display text-2xl tracking-widest">PRIMADONNA</p>
            <p className="text-sm opacity-80">123 Beauty Lane, Elegance City, 45678</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a className="hover:opacity-80 transition-opacity" href="#">Facebook</a>
            <a className="hover:opacity-80 transition-opacity" href="#">Instagram</a>
            <a className="hover:opacity-80 transition-opacity" href="#">Twitter</a>
          </div>
          <div className="text-sm opacity-80">
            © 2024 Primadonna. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



