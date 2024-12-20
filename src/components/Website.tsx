import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Link } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface ServiceItem {
  title: string;
  description: string;
}

const Website = () => {
  const { t } = useTranslation(['common', 'hero', 'services', 'contact']);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation sections
  const sections = ['home', 'services', 'contact'].map(section => ({
    key: section,
    label: t(`common.navigation.${section}`)
  }));

  // Get services with proper type casting
  const services = (t('services.items', { returnObjects: true }) as ServiceItem[]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-800">{t('common.firmName')}</div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a 
                  key={section.key} 
                  href={`#${section.key}`} 
                  className="text-gray-700 hover:text-indigo-800"
                >
                  {section.label}
                </a>
              ))}
            </div>

            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
            <div className="md:w-1/2 text-left md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-indigo-800">{t('hero.title')}</span>
              </h1>
              <p className="text-lg mb-8 text-gray-600">{t('hero.description')}</p>
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
                  src="/api/placeholder/500/500"
                  alt="Kovács Timea"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">{t('services.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service: ServiceItem, index: number) => (
              <div key={index} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="text-indigo-800 hover:text-indigo-900 text-sm font-medium flex items-center"
                  >
                    {t('services.learnMore')}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">{t('contact.form.name.label')}*</label>
                  <input
                    type="text"
                    placeholder={t('contact.form.name.placeholder')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">{t('contact.form.email.label')}*</label>
                  <input
                    type="email"
                    placeholder={t('contact.form.email.placeholder')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">{t('contact.form.message.label')}*</label>
                  <textarea
                    placeholder={t('contact.form.message.placeholder')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800 h-32"
                    required
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500">{t('contact.form.required')}</p>
                <button
                  type="submit"
                  className="bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-900 transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.address.title')}</h3>
                    <p className="text-gray-600">{t('contact.info.address.content')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.email.title')}</h3>
                    <p className="text-gray-600">{t('contact.info.email.content')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.phone.title')}</h3>
                    <p className="text-gray-600">{t('contact.info.phone.content')}</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8">
                  <img
                    src="/api/placeholder/600/300"
                    alt={t('contact.info.mapAlt')}
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="text-gray-600 hover:text-indigo-800">
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-800">
                    <Link />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>{t('contact.footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;