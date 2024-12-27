import React, { useState } from 'react';
import { ChevronRight, Linkedin, Facebook, Link } from 'lucide-react';
import timiPicture from '../assets/timi.jpeg';
import logo from '../assets/Group 17.png';
import FAQSection from './FAQ';
import { ContactSection } from './Contact';
import AboutSection from './About';
import { Services } from './Service';



const Website = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation sections// Navigation sections
  const sections = ['Főoldal', 'Szakterületek', 'Rólam', 'Kérdések', 'Kapcsolat'];
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };
  
  const scrollToContact = () => {
    const element = document.getElementById('kapcsolat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              alt="Kovács Timea Ügyvédi Iroda Logo" 
              className="h-10 w-auto"  // Adjust size as needed
            />
            <div className="text-xl font-bold text-indigo-800">
              Kovács Timea Ügyvédi Iroda
            </div>
          </div>
            
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-indigo-800">Személyre </span> szabott jogi képviselet</h1>
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
              <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={timiPicture}
                  alt="Kovács Timea"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services/>
      {/* About Me Section */}
      <AboutSection/>
      {/* FAQSection */}
      <FAQSection/>
      {/* Contact Section */}
      
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-6">
        <a 
          href="#" 
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
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Kovács Timea Ügyvédi Iroda. Minden jog fenntartva.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Website;