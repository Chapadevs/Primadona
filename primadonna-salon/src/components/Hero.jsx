import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center marble-bg">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-8xl font-display text-white font-semibold tracking-wider">PRIMADONNA</h1>
        <p className="text-xl md:text-2xl text-white mt-4 font-body">Elegance in Every Strand</p>
      </div>
    </section>
  );
};

export default Hero;



