import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;