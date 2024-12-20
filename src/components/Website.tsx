import React, { useState } from 'react';
import { ChevronRight, Linkedin, Facebook, Link } from 'lucide-react';
import timiPicture from '../assets/timi.jpeg';
import logo from '../assets/Group 17.png';
import {Service, ServiceCard} from './ServiceCard';
import FAQSection from './FAQ';
import { ContactSection } from './Contact';
import { useTranslation } from 'react-i18next';

const Website = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Navigation sections with translations
  const sections = [
    { key: 'home', label: t('nav.home') },
    { key: 'services', label: t('nav.services') },
    { key: 'about', label: t('nav.about') },
    { key: 'faq', label: t('nav.faq') },
    { key: 'contact', label: t('nav.contact') }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const legalServices: Service[] = t('services.items', { returnObjects: true });

  const scrollToContact = () => {
    const element = document.getElementById('kapcsolat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src={logo}
                alt={t('common.logoAlt')} 
                className="h-10 w-auto"
              />
              <div className="text-xl font-bold text-indigo-800">
                {t('common.lawOffice')}
              </div>
            </div>
            
            {/* Language Selector */}
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="px-2 py-1 rounded border border-gray-300"
            >
              <option value="hu">Magyar</option>
              <option value="en">English</option>
              <option value="ro">Română</option>
            </select>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map(({ key, label }) => (
                <a 
                  key={key} 
                  href={`#${key}`} 
                  className="text-gray-700 hover:text-indigo-800"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
            <div className="md:w-1/2 text-left md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-indigo-800">{t('hero.titleHighlight')} </span>
                {t('hero.title')}
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                {t('hero.description')}
              </p>
              <button
                onClick={scrollToContact}
                className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors flex items-center"
              >
                {t('hero.ctaButton')}
                <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={timiPicture}
                  alt={t('hero.imageAlt')}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {legalServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600">
                {t('about.content', { returnObjects: true }).map((paragraph: string, index: number) => (
                  <p key={index} className={`mb-6 ${index === 0 ? 'text-lg' : ''} ${index === 4 ? 'text-lg font-medium text-indigo-800' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      
      <ContactSection onSubmit={handleContactSubmit} />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
              <a 
                href={t('footer.socialLinks.facebook')} 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href={t('footer.socialLinks.linkedin')} 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={t('footer.socialLinks.website')} 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Link className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;