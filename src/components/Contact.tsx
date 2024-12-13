import React from 'react';
import { MapPin, Mail, Phone, ExternalLink} from 'lucide-react';
import { OfficeMap } from './Map';

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactFormProps> = ({ onSubmit }) => {
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-indigo-800 transition-all bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-indigo-800 transition-all bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telefonszám</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-indigo-800 transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Üzenet*</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800/20 focus:border-indigo-800 transition-all h-32 bg-white"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-500">*Kötelező mezők</p>
                <button
                  type="submit"
                  className="bg-indigo-800 text-white px-8 py-3 rounded-lg hover:bg-indigo-900 transition-colors font-medium"
                >
                  Üzenet Küldése
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-indigo-800 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Irodánk címe</h3>
                  <p className="text-gray-600">Strada Unirii 13<br />Zalău 450091<br />Románia</p>
                   
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 text-indigo-800 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:kovacstimea@gmail.com" className="text-gray-600 hover:text-indigo-800 transition-colors">
                    kovacstimea@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 text-indigo-800 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <a href="tel:+40740245886" className="text-gray-600 hover:text-indigo-800 transition-colors">
                    +40 740 245 886
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Térképes elérhetőség</h3>
              <OfficeMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};