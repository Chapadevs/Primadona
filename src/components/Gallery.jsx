import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16 md:py-24" id="gallery">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center text-primary dark:text-white mb-12">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Blonde balayage hair" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="public/images/hair-1.png"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Woman with elegant updo" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="public/images/hair-2.png"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Rich brunette hair color" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="public/images/hair-3.png"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Woman with stylish short haircut" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="public/images/hair-4.png"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;



