import React, { useState } from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { OfficeMap } from '../components/Map';

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const coordinates = "47.179435,23.053965";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      const formEntries = {
        'entry.918610683': formData.get('name')?.toString() ?? '',
        'entry.202993236': formData.get('email')?.toString() ?? '',
        'entry.762484117': formData.get('phone')?.toString() ?? '',
        'entry.1596383647': formData.get('message')?.toString() ?? ''
      } as Record<string, string>;

      const FORM_ID = '1FAIpQLScQNmLMD9cbrltTRaxMo53AOgJx62h4RXG2wSC3-4FBWMULLA';
      
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formEntries)
      });
      
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="kapcsolat" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Kapcsolatfelvétel</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Név*</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-[#597F70] transition-all bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-[#597F70] transition-all bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telefonszám</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-[#597F70] transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Üzenet*</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-[#597F70] transition-all h-32 bg-white"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-500">*Kötelező mezők</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#597F70] text-white px-8 py-3 rounded-lg hover:bg-[#597F70] transition-colors font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Küldés...' : 'Üzenet Küldése'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                  Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                  Hiba történt az üzenet küldése közben. Kérjük próbálja újra később.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-semibold text-gray-900 mb-4">Elérhetőségeink</h3>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-[#597F70] flex-shrink-0" />
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4">
                    
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#597F70] hover:text-[#436557] transition-colors"
                      title="Megtekintés Google Maps-en"
                    >
                      <p className="text-gray-600">Zilah, Unirii utca 13, 1. emelet </p>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 text-[#597F70] flex-shrink-0" />
                <div>
                  <a href="mailto:avocat.kt@gmail.com" className="text-gray-600 hover:text-[#597F70] transition-colors">
                    avocat.kt@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 text-[#597F70] flex-shrink-0" />
                <div>
                  <a href="tel:+40740245886" className="text-gray-600 hover:text-[#597F70] transition-colors">
                    +40 740 245 886
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
              <OfficeMap googleMapsUrl={googleMapsUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};