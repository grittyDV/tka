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