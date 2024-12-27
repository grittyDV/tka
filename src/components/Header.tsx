import React from 'react';
import { useTranslations } from '../contexts/TranslationContext';

export const Header = () => {
  const translations = useTranslations();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-800">{translations.header.title}</div>
          
          <div className="hidden md:flex space-x-8">
            {Object.entries(translations.header.navigation).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="text-gray-700 hover:text-indigo-800">
                {value}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};