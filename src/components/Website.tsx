import React from 'react';
import { useTranslations } from '../contexts/TranslationContext';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Website = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Website;