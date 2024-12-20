import React, { useState } from 'react';
import { ChevronRight, Linkedin, Facebook, Link } from 'lucide-react';
import timiPicture from '../assets/timi.jpeg';
import logo from '../assets/Group 17.svg';
import {Service, ServiceCard} from './ServiceCard';
import FAQSection from './FAQ';
import { ContactSection } from './Contact';



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

  const legalServices: Service[] = [
    {
      "title": "Öröklési és Vagyonjog",
      "mainPoints": [
        "Örökösödési eljárások lebonyolítása",
        "Földügyek, telekkönyvi és kataszteri hivatali ügyintézés",
        "Vagyonmegosztás és tulajdonjogi viták kezelése"
      ]
    },
    {
      "title": "Családjog",
      "mainPoints": [
        "Válások és kapcsolódó jogi eljárások",
        "Gyermekelhelyezés, tartásdíj és gyereklátogatási idő megállapítása",
        "Távoltartási kérelmek és apasági perek kezelése"
      ]
    },
    {
      "title": "Kereskedelmi jog",
      "mainPoints": [
        "Kereskedelmi szerződések megszerkesztése és egyeztetése",
        "Követelések behajtása és bírósági ítéletek kényszervégrehajtása",
        "Fizetési meghagyásos és csődeljárások jogi képviselete"
      ]
    },
    {
      title: 'Biztosítási jog',
      mainPoints: [
        'Biztosítási jogok védelme és érvényesítése',
        'Képviselet biztosítási vitákban',
        'Jogi tanácsadás biztosítási ügyekben'
      ]
    },
    {
      title: 'Szabálysértési jog',
      mainPoints: [
        'Szabálysértési jegyzőkönyvek elleni panaszok',
        'Képviselet bíróság előtt szabálysértési ügyekben',
        'Bírságok elleni jogorvoslatok intézése'
      ]
    },
    {
      title: 'Büntetőjog',
      mainPoints: [
        'Védelem a nyomozati és bírósági szakaszban',
        'Bűnügyi panaszok megszerkesztése és előterjesztése',
        'Jogi képviselet bűntető eljárások során'
      ]
    },
    {
      title: 'Munkajog',
      mainPoints: [
        'Munkaügyi konfliktusok rendezése',
        'Munkajogi képviselet bíróság előtt',
        'Munkaügyi megállapodások és jogviták kezelése'
      ]
    },
    {
      title: 'Közigazgatási jog',
      mainPoints: [
        'Jogi képviselet romániai intézmények előtt',
        'Peres ügyek intézése a közigazgatási törvényszéken',
        'Hatósági határozatok elleni fellebbezések'
      ]
    }
  ];

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
              Ügyvédi Iroda
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
    <section id="szakterületek" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Szakterületek</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* All services in a single grid */}
          {legalServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          {/* Add an empty div to fill the last spot in the grid */}
          </div>
      </div>
    </section>
      {/* About Me Section */}
      <section id="rólam" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Rólam</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6 text-lg">
                  Minden jogi ügy mögött egy ember áll, aki megoldást keres. Ha tapasztalt és elkötelezett ügyvédet keres, aki megértéssel és szakértelemmel képviseli Önt, jó helyen jár.
                </p>
                <p className="mb-6">
                  2010-ben fejeztem be jogi tanulmányaimat a kolozsvári Babeș-Bolyai Tudományegyetem Jogi Karán. Mesteri fokozatomat Közösségi magánjog szakterületen szereztem 2011-ben, a Pécsi Tudományegyetem és a Babeș-Bolyai Tudományegyetem közös képzésének keretében.
                </p>
                <p className="mb-6">
                  2013 óta büszkén képviselem ügyfeleimet a Szilágy megyei Ügyvédi Kamara tagjaként.
                </p>
                <p className="mb-6">
                  A jog iránti szenvedélyem és elkötelezettségem lehetővé tette, hogy számos sikeres ügyet vigyek végig, és megerősítsem ügyfeleim bizalmát. Hiszek abban, hogy a jogi kihívások megoldása nem csupán szakmai tudást, hanem empátiát, megértést és személyre szabott megközelítést is igényel.
                </p>
                <p className="text-lg font-medium text-indigo-800">
                  Bízzon meg bennem, hogy jogi problémájára hatékony és emberközpontú megoldást találjunk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection/>
      {/* Contact Section */}
      
      <ContactSection onSubmit={handleContactSubmit} />

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
          href="#" 
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="#" 
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