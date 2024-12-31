import React from 'react';
import { ExternalLink } from 'lucide-react';

interface OfficeMapProps {
  googleMapsUrl: string;
}

export const OfficeMap: React.FC<OfficeMapProps> = ({ googleMapsUrl }) => {
  return (
    <div className="space-y-4">
      <div className="relative h-[300px] w-full rounded-lg overflow-hidden border border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1735657410494!6m8!1m7!1s8js3hlIzHWFT0AXXBoINEQ!2m2!1d47.17955370994567!2d23.05411080903787!3f245.29166911481167!4f6.208720004686384!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Office location on Google Maps"
          className="absolute inset-0"
        />
      </div>
      <a href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#597F70] text-white rounded-lg hover:bg-[#436557] transition-colors"
      >
        <span>Megnyitás Google Maps-ben</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};