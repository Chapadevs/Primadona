import React from 'react';

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-accent-light dark:bg-accent-dark" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary dark:text-white mb-4">Our Services</h2>
        <p className="max-w-2xl mx-auto text-text-light dark:text-text-dark mb-12">Experience luxury hair care with our range of professional services, tailored to your unique style.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <span className="material-icons-outlined text-4xl text-primary dark:text-white mb-4">content_cut</span>
            <h3 className="text-2xl font-display font-semibold mb-2 text-primary dark:text-white">Haircuts & Styling</h3>
            <p className="text-text-light dark:text-text-dark">Precision cuts and beautiful styling for any occasion. From classic looks to modern trends.</p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <span className="material-icons-outlined text-4xl text-primary dark:text-white mb-4">palette</span>
            <h3 className="text-2xl font-display font-semibold mb-2 text-primary dark:text-white">Coloring & Highlights</h3>
            <p className="text-text-light dark:text-text-dark">Vibrant colors, subtle balayage, and stunning highlights to enhance your natural beauty.</p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <span className="material-icons-outlined text-4xl text-primary dark:text-white mb-4">spa</span>
            <h3 className="text-2xl font-display font-semibold mb-2 text-primary dark:text-white">Treatments</h3>
            <p className="text-text-light dark:text-text-dark">Nourishing and revitalizing treatments to restore your hair's health and shine.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;



