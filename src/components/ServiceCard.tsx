import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface Service {
    title: string;
    description: string;
}

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full">
            {/* These come from the individual service item */}
            <h3 className="text-xl font-bold text-indigo-800 mb-4">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <a
                href="#"
                className="text-indigo-800 hover:text-indigo-900 text-sm font-medium flex items-center"
            >
                {/* This comes from the services section translations */}
                {t('services.learnMore')}
                <ChevronRight className="w-4 h-4 ml-1" />
            </a>
        </div>
    );
};