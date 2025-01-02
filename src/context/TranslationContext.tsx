import React, { createContext, useContext } from 'react';
import huTranslations from '../locales/hu.json';
import roTranslations from '../locales/ro.json';
import enTranslations from '../locales/en.json';

type Translations = typeof huTranslations;

interface TranslationContextType {
  t: Translations;
  lang: 'hu' | 'ro' | 'en';
}

const TranslationContext = createContext<TranslationContextType>({
  t: huTranslations,
  lang: 'hu'
});

interface TranslationProviderProps {
  children: React.ReactNode;
  lang: 'hu' | 'ro' | 'en';
}

// Create a translations map for better organization
const translations = {
  hu: huTranslations,
  ro: roTranslations,
  en: enTranslations
} as const;

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children, lang }) => {
  // Add error handling for missing translations
  try {
    const currentTranslations = translations[lang];
    
    if (!currentTranslations) {
      console.error(`No translations found for language: ${lang}`);
      // Fallback to Hungarian if translations are missing
      return (
        <TranslationContext.Provider value={{ t: huTranslations, lang: 'hu' }}>
          {children}
        </TranslationContext.Provider>
      );
    }

    console.log(`Providing translations for: ${lang}`); // Debug log

    return (
      <TranslationContext.Provider value={{ t: currentTranslations, lang }}>
        {children}
      </TranslationContext.Provider>
    );
  } catch (error) {
    console.error('Error in TranslationProvider:', error);
    // Fallback to Hungarian in case of error
    return (
      <TranslationContext.Provider value={{ t: huTranslations, lang: 'hu' }}>
        {children}
      </TranslationContext.Provider>
    );
  }
};

// Add error handling to the hook
export const useTranslations = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    console.error('useTranslations must be used within a TranslationProvider');
    // Fallback to Hungarian if context is missing
    return { t: huTranslations, lang: 'hu' };
  }
  return context;
};