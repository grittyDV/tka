import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Link, Home, Users, FileText, Scale, Briefcase, Building2, BadgeDollarSign, ShieldCheck } from 'lucide-react';

const Website = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Previous code stays the same until the return statement
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Previous sections remain unchanged */}

      {/* Contact Section */}
      <section id="kapcsolat" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Kapcsolatfelvétel</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Név*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Üzenet*</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800 h-32"
                    required
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500">*Kötelező mezők</p>
                <button
                  type="submit"
                  className="bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-900 transition-colors"
                >
                  Üzenet Küldése
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Elérhetőségeink</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">Irodánk címe</h3>
                    <p className="text-gray-600">Strada Unirii 13<br />Zalău 457246<br />Románia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">kovacstimea@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">+40 740 245 886</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8">
                  <img
                    src="/api/placeholder/600/300"
                    alt="Iroda térképe"
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
          <p>&copy; {new Date().getFullYear()} Kovács Timea Ügyvédi Iroda. Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;