import { Linkedin, Facebook, Link } from 'lucide-react';
import logo from '../assets/LogoKT.png';
import FAQSection from '../sections/FAQ';
import { ContactSection } from '../sections/Contact';
import AboutSection from '../sections/About';
import { Services } from '../sections/Service';
import { Hero } from '../sections/Hero';


const Website = () => {
  // Navigation sections// Navigation sections
  const sections = ['Főoldal', 'Szakterületek', 'Rólam', 'Kérdések', 'Kapcsolat'];
  
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
            <div className="text-xl font-bold text-[#597F70]">
              Kovács Tímea Ügyvédi Iroda
            </div>
          </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a key={section} href={`#${section.toLowerCase()}`} className="text-gray-700 hover:text-[#597F70]">
                  {section}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero/>
      
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