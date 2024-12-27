import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '../contexts/TranslationContext';

export const Contact = () => {
  const translations = useTranslations();

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">{translations.contact.title}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  {translations.contact.form.name.label}
                  {translations.contact.form.name.required && '*'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                  required={translations.contact.form.name.required}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {translations.contact.form.email.label}
                  {translations.contact.form.email.required && '*'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                  required={translations.contact.form.email.required}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {translations.contact.form.message.label}
                  {translations.contact.form.message.required && '*'}
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800 h-32"
                  required={translations.contact.form.message.required}
                ></textarea>
              </div>
              <p className="text-sm text-gray-500">{translations.contact.form.requiredNote}</p>
              <button
                type="submit"
                className="bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-900 transition-colors"
              >
                {translations.contact.form.submit}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">{translations.contact.info.title}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-indigo-800" />
                <div>
                  <h3 className="font-semibold mb-1">{translations.contact.info.address.title}</h3>
                  <p className="text-gray-600">
                    {translations.contact.info.address.street}<br />
                    {translations.contact.info.address.city} {translations.contact.info.address.postalCode}<br />
                    {translations.contact.info.address.country}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 text-indigo-800" />
                <div>
                  <h3 className="font-semibold mb-1">{translations.contact.info.email.title}</h3>
                  <p className="text-gray-600">{translations.contact.info.email.value}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 text-indigo-800" />
                <div>
                  <h3 className="font-semibold mb-1">{translations.contact.info.phone.title}</h3>
                  <p className="text-gray-600">{translations.contact.info.phone.value}</p>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="/api/placeholder/600/300"
                  alt={translations.contact.info.map.alt}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};