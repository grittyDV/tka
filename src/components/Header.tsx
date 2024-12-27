import React from 'react';
import { useTranslations } from '../contexts/TranslationContext';
import logo from '../assets/Group 17.png'

export const Header = () => {
  const translations = useTranslations();
  const sections = ['home', 'about', 'services', 'faq', 'contact'];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-3">
        <img
                src={logo}
                alt={translations.hero.imageAlt}
                className="h-10 w-auto"
              />
          <div className="text-xl font-bold text-indigo-800">{translations.header.title}</div>
          
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a 
                key={section} 
                href={`#${section}`} 
                className="text-gray-700 hover:text-indigo-800"
              >
                {translations.header.navigation[section]}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};