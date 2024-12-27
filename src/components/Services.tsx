import React from 'react';
import { ChevronRight, Home, Users, FileText, Shield, Scale, GavelIcon, Briefcase, Building2 } from 'lucide-react';

export interface Service {
  title: string;
  mainPoints: string[];
}

export const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Szakterületeink</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalServices.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
            return (
              <div key={index} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all group">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-800" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.mainPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-indigo-800">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};