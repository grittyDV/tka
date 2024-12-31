
import { ChevronRight } from 'lucide-react';
import timiPicture from '../assets/timi.jpeg';

const scrollToContact = () => {
    const element = document.getElementById('kapcsolat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export const Hero: React.FC = () => {
    return (
        <section id="főoldal" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
                    <div className="md:w-1/2 text-left md:pr-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Személyre szabott jogi képviselet</h1>
                        <p className="text-lg mb-8 text-gray-600">
                            Minden jogi ügy mögött egy ember áll, aki megoldást keres. Ha tapasztalt és elkötelezett ügyvédet keres, aki megértéssel és szakértelemmel képviseli Önt, jó helyen jár. <br /> <br /> <span className="text-[#597F70] font-bold">Célom az Ön jogainak hatékony védelme és érdekeinek képviselete.</span>
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="bg-[#597F70] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#597F70] transition-colors flex items-center"
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
    );
};