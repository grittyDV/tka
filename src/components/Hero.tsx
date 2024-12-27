import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from '../contexts/TranslationContext';
import timi from '../assets/timi.jpeg'

export const Hero = () => {
  const translations = useTranslations();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
          <div className="md:w-1/2 text-left md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {translations.hero.title.split(translations.hero.highlight).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-indigo-800">{translations.hero.highlight}</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-lg mb-8 text-gray-600">{translations.hero.description}</p>
            <button
              onClick={scrollToContact}
              className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors flex items-center"
            >
              {translations.hero.cta}
              <ChevronRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white p-4 rounded-lg shadow-lg">
              <img
                src={timi}
                alt={translations.hero.imageAlt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};