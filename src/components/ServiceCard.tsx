import { ChevronRight } from "lucide-react";
export interface Service {
    title: string;
    mainPoints: string[];
  }
  
export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full">
        <h3 className="text-xl font-bold text-indigo-800 mb-4">{service.title}</h3>
        <ul className="space-y-2">
          {service.mainPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="ml-2 text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };