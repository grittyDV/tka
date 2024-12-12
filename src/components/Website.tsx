import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Link, Home, Users, FileText, Scale, Briefcase, Building2, BadgeDollarSign, ShieldCheck } from 'lucide-react';

const Website = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation sections
  const sections = ['Főoldal', 'Szakterületek', 'Vélemények', 'Kapcsolat'];

  const scrollToContact = () => {
    document.getElementById('kapcsolat').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-800">Kovács Timea Ügyvédi Iroda</div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a key={section} href={`#${section.toLowerCase()}`} className="text-gray-700 hover:text-indigo-800">
                  {section}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="főoldal" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
            <div className="md:w-1/2 text-left md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Személyes és <span className="text-indigo-800">szakértő</span> jogi képviselet</h1>
              <p className="text-lg mb-8 text-gray-600">
                Személyre szabott jogi megoldások magánszemélyek és vállalkozások részére, 15 éves szakmai tapasztalattal. Célom az Ön jogainak hatékony védelme és érdekeinek képviselete.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors flex items-center"
              >
                Időpontfoglalás
                <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white p-4 rounded-lg shadow-lg">
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
    </div>
  );
};

export default Website;