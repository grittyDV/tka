import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '../context/TranslationContext';

// Separate Flag Components
const RomanianFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#00319c" d="M0 0h213.3v480H0z" />
      <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

const HungarianFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#388d00" d="M640 480H0V320h640z" />
      <path fill="#d43516" d="M640 160.1H0V0h640z" />
    </g>
  </svg>
);

const USFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
      <path fill="#bd3d44" d="M0 0h640v480H0"/>
      <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
      <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
      <g fill="#fff">
        <g transform="translate(30.2 11) scale(.51)">
          <path d="M1 0h2v1H1z" transform="scale(3.9385)"/>
          <path d="M0 0h1v1H0z" transform="translate(16) scale(3.9385)"/>
          <path d="M1 0h2v1H1z" transform="translate(32) scale(3.9385)"/>
          <path d="M0 0h1v1H0z" transform="translate(48) scale(3.9385)"/>
        </g>
        <g transform="translate(30.2 22) scale(.51)">
          <path d="M1 0h2v1H1z" transform="scale(3.9385)"/>
          <path d="M0 0h1v1H0z" transform="translate(16) scale(3.9385)"/>
          <path d="M1 0h2v1H1z" transform="translate(32) scale(3.9385)"/>
          <path d="M0 0h1v1H0z" transform="translate(48) scale(3.9385)"/>
        </g>
        <g transform="translate(30.2 33) scale(.51)">
          <path d="M1 0h2v1H1z" transform="scale(3.9385)"/>
          <path d="M0 0h1v1H0z" transform="translate(16) scale(3.9385)"/>
          <path d="M1 0h2v1H1z" transform="translate(32) scale(3.9385)"/>
          <path d="M0 0h1v1H0z" transform="translate(48) scale(3.9385)"/>
        </g>
      </g>
    </g>
  </svg>
);

export const LanguageDropdown = ({ variant = 'header' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useTranslations();

  const navigateToLanguage = (newLang: 'hu' | 'ro' | 'en') => {
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    
    // Replace existing language path or add new one
    if (currentPath.match(/\/(hu|ro|en)/)) {
      newPath = currentPath.replace(/\/(hu|ro|en)/, `/${newLang}`);
    } else {
      newPath = `/${newLang}${currentPath}`;
    }
    
    window.location.pathname = newPath || `/${newLang}`;
  };

  const getCurrentFlag = () => {
    switch (lang) {
      case 'hu': return <HungarianFlag />;
      case 'ro': return <RomanianFlag />;
      case 'en': return <USFlag />;
      default: return <HungarianFlag />;
    }
  };

  const getCurrentLanguage = () => {
    switch (lang) {
      case 'hu': return 'Magyar';
      case 'ro': return 'Română';
      case 'en': return 'English';
      default: return 'Magyar';
    }
  };

  const headerStyles = {
    button: "flex items-center space-x-2 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors",
    text: "text-sm font-medium text-gray-700",
    dropdown: "absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1",
    option: "flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50",
  };

  const footerStyles = {
    button: "flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors",
    text: "text-sm",
    dropdown: "absolute bottom-full mb-1 w-40 bg-gray-700 border border-gray-600 rounded-md shadow-lg py-1",
    option: "flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600",
  };

  const styles = variant === 'header' ? headerStyles : footerStyles;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {getCurrentFlag()}
        <span className={styles.text}>
          {getCurrentLanguage()}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div 
          className={styles.dropdown}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <button
            onClick={() => {
              navigateToLanguage('hu');
              setIsOpen(false);
            }}
            className={styles.option}
            role="menuitem"
          >
            <HungarianFlag />
            <span>Magyar</span>
          </button>
          <button
            onClick={() => {
              navigateToLanguage('ro');
              setIsOpen(false);
            }}
            className={styles.option}
            role="menuitem"
          >
            <RomanianFlag />
            <span>Română</span>
          </button>
          <button
            onClick={() => {
              navigateToLanguage('en');
              setIsOpen(false);
            }}
            className={styles.option}
            role="menuitem"
          >
            <USFlag />
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
};