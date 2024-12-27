import React from 'react';
import { useTranslations } from '../contexts/TranslationContext';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { FAQ } from './FAQ';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Website = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Website;