import React, { createContext, useContext } from 'react';
import huTranslations from '../locales/hu.json';

type Translations = typeof huTranslations;

const TranslationContext = createContext<Translations>(huTranslations);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TranslationContext.Provider value={huTranslations}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => useContext(TranslationContext);
