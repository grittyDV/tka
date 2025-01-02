import { ServiceCard } from "../components/ServiceCard";
import { useTranslations } from '../context/TranslationContext';

export const Services: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};