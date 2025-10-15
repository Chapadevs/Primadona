import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-accent-light dark:bg-accent-dark" id="about">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            alt="Interior of a luxury hair salon" 
            className="rounded-lg shadow-xl w-full h-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXIf8iojtqVrveel8l1GA_q-rONLfaJIyzpd-mehdEi5PEd8fi1BGObZ-fDlkuxXdE3Lmpj4d5s8uRu0WRUrUHqy5PP7b5SSw4QJx6QfVRT_JZLjjSHnR3x4JpfQYE8eLpPAh_fFqTfFFtSCjaEsvStjKVS2ZQPAnWjQPCasiuuXu698SlyFeXWgAWTnQBzZ_Vg4shw5wI1q3uAFvz7T5oiTyVHv4qEIBKxS5dwhQR_IMB8W1NMCOuezmuAeuhHeENAZ8eSSTVo1s"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary dark:text-white mb-4">Refined Beauty</h2>
          <p className="text-text-light dark:text-text-dark mb-4">At Primadonna, we believe that true elegance lies in simplicity and sophistication. Our salon is a sanctuary where women can unwind and indulge in a personalized beauty experience.</p>
          <p className="text-text-light dark:text-text-dark">Our team of expert stylists is dedicated to the art of hairdressing, combining classic techniques with contemporary trends to create timeless looks that reflect your individual personality. We use only the finest products to ensure your hair is not only beautiful but also healthy and vibrant.</p>
        </div>
      </div>
    </section>
  );
};

export default About;



