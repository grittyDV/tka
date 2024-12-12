import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Link, Home, Users, FileText, Scale, Briefcase, Building2, BadgeDollarSign, ShieldCheck } from 'lucide-react';

const Website = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation sections
  const sections = ['Főoldal', 'Szakterületek', 'Vélemények', 'Kapcsolat'];

  // Service cards data
  const services = [
    { 
      title: 'Ingatlan ügyek',
      description: 'Adásvételi szerződések, bérleti jogviszonyok.',
      icon: Home,
      learnMoreUrl: '#'
    },
    { 
      title: 'Családjog',
      description: 'Házassági vagyonjog, öröklési ügyek.',
      icon: Users,
      learnMoreUrl: '#'
    },
    { 
      title: 'Szerződések',
      description: 'Szerződések készítése és véleményezése.',
      icon: FileText,
      learnMoreUrl: '#'
    },
    { 
      title: 'Kártérítési jog',
      description: 'Személyi és vagyoni károk megtérítése.',
      icon: Scale,
      learnMoreUrl: '#'
    },
    { 
      title: 'Munkajog',
      description: 'Munkaszerződések, munkajogi viták.',
      icon: Briefcase,
      learnMoreUrl: '#'
    },
    { 
      title: 'Társasági jog',
      description: 'Cégalapítás, változásbejelentés.',
      icon: Building2,
      learnMoreUrl: '#'
    },
    { 
      title: 'Követeléskezelés',
      description: 'Peres és peren kívüli ügyek.',
      icon: BadgeDollarSign,
      learnMoreUrl: '#'
    },
    { 
      title: 'Adatvédelem',
      description: 'GDPR megfelelés, szabályzatok készítése.',
      icon: ShieldCheck,
      learnMoreUrl: '#'
    }
  ];

  // Testimonial data
  const testimonials = [
    { 
      name: 'Kovács János',
      role: 'Ingatlanfejlesztő',
      text: 'Kiváló szakmai háttérrel rendelkező ügyvédi iroda, amely mindig időben és precízen végzi munkáját.' 
    },
    { 
      name: 'Nagy Éva',
      role: 'Társasházkezelő',
      text: 'Megbízható partner a társasházi jogviták rendezésében. Gyors és hatékony megoldásokat kínálnak.' 
    },
    { 
      name: 'Szabó Péter',
      role: 'Vállalkozó',
      text: 'Szerződéses ügyekben nyújtott támogatásuk kiemelkedő, szakértelmük megkérdőjelezhetetlen.' 
    },
    { 
      name: 'Kiss Mária',
      role: 'Magánszemély',
      text: 'Családjogi ügyemben nyújtott segítségük és empátiájuk példaértékű volt.' 
    },
    { 
      name: 'Tóth István',
      role: 'Cégvezető',
      text: 'Professzionális hozzáállás, személyre szabott megoldások. Csak ajánlani tudom.' 
    }
  ];

  // Carousel auto-scroll
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('kapcsolat').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header and Hero sections remain the same */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-800">Kovács Timea Ügyvédi Iroda</div>
            
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

      <section id="főoldal" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
        {/* Hero section content remains the same */}
      </section>

      {/* Services Section */}
      <section id="szakterületek" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Szakterületeink</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-200 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-800" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <a
                      href={service.learnMoreUrl}
                      className="text-indigo-800 hover:text-indigo-900 text-sm font-medium flex items-center"
                    >
                      További információ
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="vélemények" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ügyfeleink Mondták</h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Website;