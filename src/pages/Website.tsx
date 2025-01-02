import { Linkedin, Facebook, Link } from 'lucide-react';
import logo from '../assets/LogoKT.png';
import FAQSection from '../sections/FAQ';
import { ContactSection } from '../sections/Contact';
import AboutSection from '../sections/About';
import { Services } from '../sections/Service';
import { Hero } from '../sections/Hero';
import { useTranslations } from '../context/TranslationContext';
import { LanguageDropdown } from '../components/LanguageDropDown';
import { Link as RouterLink } from 'react-router-dom';

const Website = () => {
  const { t, lang } = useTranslations(); // Add currentLanguage from context

  const navItems = [
    { id: 'home', label: t.page.navigation.home },
    { id: 'services', label: t.page.navigation.services },
    { id: 'faq', label: t.page.navigation.faq },
    { id: 'about', label: t.page.navigation.aboutme },
    { id: 'contact', label: t.page.navigation.contact }
  ];

  // Create privacy policy URL with language parameter
  const privacyPolicyUrl = `/${lang}/privacy-policy`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt={t.page.logoAlt}
                className="h-10 w-auto"
              />
              <div className="text-xl font-bold text-[#597F70]">
                {t.page.title}
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-[#597F70]"
                >
                  {item.label}
                </a>
              ))}
              <LanguageDropdown variant="header" />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Sections */}
      <Hero />
      <Services />
      <FAQSection />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61571397660008"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kovacs-timea-638838170"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://cautavocat.ro/avocat/kovacs-timea-1"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Link className="w-6 h-6" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} {t.page.title}. {t.page.footer.copyright}
              </p>
              <div className="border-l border-gray-600 h-4"></div>
              <LanguageDropdown variant="footer" />
              <div className="border-l border-gray-600 h-4"></div>
              <RouterLink 
                to={privacyPolicyUrl} 
                className="text-gray-400 text-sm hover:text-white"
              >
                {t.page.footer.privacy.title}
              </RouterLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;