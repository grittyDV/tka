import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <select 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white border rounded-lg px-3 py-1"
      >
        <option value="hu">Magyar</option>
        <option value="ro">Română</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;