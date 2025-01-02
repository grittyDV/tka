import { ChevronRight } from 'lucide-react';
import timiPicture from '../assets/timi.jpeg';
import { useTranslations } from '../context/TranslationContext';

const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const Hero: React.FC = () => {
    const { t } = useTranslations();

    return (
        <section id="home" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
                    <div className="md:w-1/2 text-left md:pr-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t.hero.title}
                        </h1>
                        <p className="text-lg mb-8 text-gray-600">
                            {t.hero.description}
                            <br /> <br />
                            <span className="text-[#597F70] font-bold">
                                {t.hero.highlighted_description}
                            </span>
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="bg-[#597F70] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#597F70] transition-colors flex items-center"
                        >
                            {t.hero.cta}
                            <ChevronRight className="ml-2 h-6 w-6" />
                        </button>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src={timiPicture}
                                alt={t.hero.imageAlt}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};