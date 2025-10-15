import React from 'react';

const Appointment = () => {
  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary dark:text-white mb-4">Book Your Appointment</h2>
        <p className="max-w-2xl mx-auto text-text-light dark:text-text-dark mb-12">Ready to transform your look? Contact us to schedule your visit. We look forward to welcoming you.</p>
        <div className="max-w-lg mx-auto">
          <form action="#" className="space-y-6 text-left" method="POST">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input 
                className="w-full px-4 py-3 rounded-lg bg-accent-light dark:bg-accent-dark border-transparent focus:ring-primary focus:border-primary dark:text-white" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input 
                className="w-full px-4 py-3 rounded-lg bg-accent-light dark:bg-accent-dark border-transparent focus:ring-primary focus:border-primary dark:text-white" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="service">Service</label>
              <select 
                className="w-full px-4 py-3 rounded-lg bg-accent-light dark:bg-accent-dark border-transparent focus:ring-primary focus:border-primary dark:text-white text-text-light dark:text-text-dark" 
                id="service" 
                name="service"
              >
                <option>Select a service</option>
                <option>Haircut & Styling</option>
                <option>Coloring & Highlights</option>
                <option>Treatments</option>
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg bg-accent-light dark:bg-accent-dark border-transparent focus:ring-primary focus:border-primary dark:text-white" 
                id="message" 
                name="message" 
                placeholder="Your Message (optional)" 
                rows="4"
              ></textarea>
            </div>
            <div>
              <button 
                className="w-full bg-primary text-white dark:text-background-light py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg" 
                type="submit"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;



