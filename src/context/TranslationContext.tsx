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

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children, lang }) => {
  const translations = lang === 'hu' ? huTranslations : lang === 'ro' ? roTranslations : enTranslations;

  return (
    <TranslationContext.Provider value={{ t: translations, lang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => useContext(TranslationContext);