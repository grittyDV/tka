import React from 'react';
import { useTranslations } from '../contexts/TranslationContext';

export const Footer = () => {
  const translations = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>{translations.footer.copyright.replace('{{year}}', currentYear.toString())}</p>
      </div>
    </footer>
  );
};