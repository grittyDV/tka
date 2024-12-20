import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation('common');

  const sections = [
    { key: 'home', href: '#fooldal' },
    { key: 'services', href: '#szakteruletek' },
    { key: 'testimonials', href: '#velemenyek' },
    { key: 'contact', href: '#kapcsolat' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-800">
            {t('firmName')}
          </div>
          
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.key}
                href={section.href}
                className="text-gray-700 hover:text-indigo-800"
              >
                {t(`navigation.${section.key}`)}
              </a>
            ))}
          </div>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;