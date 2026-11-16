import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Sun, Droplets, Activity, ShieldCheck } from 'lucide-react';
export const TreatmentCard = ({ treatment }) => {
    // Determine badge background and icon color per Section 5 specifications:
    // Acne & Acne Scars: Icon bg Yellow, Icon color Purple
    // Pigmentation & Melasma: Icon bg Light Pink, Icon color Magenta
    // Hair & Scalp Care: Icon bg Light Blue, Icon color Pond Blue
    // Laser Dermatology: Icon bg Orange, Icon color White
    const getBadgeStyle = () => {
        switch (treatment.id) {
            case 'acne-scars':
                return {
                    bg: 'bg-derma-yellow',
                    iconColor: 'text-derma-purple',
                    icon: <Droplets className="w-5 h-5 text-derma-purple" strokeWidth={2.3}/>,
                };
            case 'pigmentation-melasma':
                return {
                    bg: 'bg-derma-pink-light',
                    iconColor: 'text-derma-magenta',
                    icon: <Sparkles className="w-5 h-5 text-derma-magenta" strokeWidth={2.3}/>,
                };
            case 'hair-scalp-care':
                return {
                    bg: 'bg-derma-blue-light',
                    iconColor: 'text-derma-blue',
                    icon: <Activity className="w-5 h-5 text-derma-blue" strokeWidth={2.3}/>,
                };
            case 'laser-dermatology':
                return {
                    bg: 'bg-derma-orange',
                    iconColor: 'text-white',
                    icon: <Sun className="w-5 h-5 text-white" strokeWidth={2.3}/>,
                };
            case 'skin-rejuvenation':
                return {
                    bg: 'bg-derma-pink-light',
                    iconColor: 'text-derma-magenta',
                    icon: <Sparkles className="w-5 h-5 text-derma-magenta" strokeWidth={2.3}/>,
                };
            case 'chemical-peels':
            default:
                return {
                    bg: 'bg-derma-yellow',
                    iconColor: 'text-derma-purple',
                    icon: <ShieldCheck className="w-5 h-5 text-derma-purple" strokeWidth={2.3}/>,
                };
        }
    };
    const badge = getBadgeStyle();
    return (<div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-derma-border shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5">
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-derma-kombu-subtle p-3 pb-0">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-derma-purple/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>

        {/* Overlapping circular badge at bottom-left */}
        <div className={`absolute left-6 -bottom-3.5 w-11 h-11 rounded-full flex items-center justify-center shadow-md border-2 border-white transition-transform duration-300 group-hover:scale-110 z-10 ${badge.bg}`}>
          {badge.icon}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 pt-7">
        <h3 className="text-lg font-bold text-derma-purple group-hover:text-derma-kombu transition-colors duration-200 mt-1">
          {treatment.title}
        </h3>
        <p className="mt-2 text-sm text-derma-text-muted leading-relaxed flex-1">
          {treatment.shortDescription}
        </p>

        {/* Action Link */}
        <div className="mt-4 pt-2">
          <Link to={`/treatments/${treatment.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-derma-kombu hover:text-derma-purple transition-colors duration-200">
            <span>Explore Treatment</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"/>
          </Link>
        </div>
      </div>
    </div>);
};
