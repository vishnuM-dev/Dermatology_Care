import React, { useState } from 'react';
import { TreatmentCard } from '../components/ui/TreatmentCard';
import { TREATMENTS } from '../data/treatments';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Search } from 'lucide-react';

export const Treatments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'skin', label: 'Skin Care' },
    { id: 'hair', label: 'Hair & Scalp' },
    { id: 'laser', label: 'Laser Care' },
    { id: 'aesthetic', label: 'Aesthetic Care' },
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory =
      selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.concerns.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-derma-kombu-subtle via-derma-kombu-light/30 to-white py-16 md:py-20 border-b border-derma-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-kombu uppercase mb-2 inline-block">
            OUR CLINICAL SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-derma-purple max-w-3xl mx-auto leading-tight">
            Comprehensive Care for Your <span className="text-derma-orange">Skin &amp; Hair</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-derma-text-muted max-w-2xl mx-auto leading-relaxed">
            Evidence-based medical protocols and non-invasive laser aesthetics formulated to deliver safe, enduring, and natural dermal transformations.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-derma-blue absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search treatments or skin concerns (e.g., acne, melasma, scars)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-full border border-derma-border shadow-soft focus:outline-none focus:ring-2 focus:ring-derma-kombu/40 text-sm text-derma-text placeholder:text-derma-text-muted/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-semibold text-derma-kombu hover:text-derma-purple"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills: Active in Happy Yellow with dark purple text */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${selectedCategory === c.id
                  ? 'bg-derma-yellow text-derma-purple-deep shadow-sm scale-105'
                  : 'bg-white border border-derma-border text-derma-kombu hover:bg-derma-kombu-light/60'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {filteredTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-derma-soft rounded-3xl p-8 border border-derma-border max-w-lg mx-auto">
              <p className="text-lg font-bold text-derma-purple">No treatments found</p>
              <p className="text-sm text-derma-text-muted mt-2">
                We couldn't find treatments matching "{searchQuery}". Try searching for another concern or select "All Treatments".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 bg-derma-purple text-white text-xs font-bold rounded-full hover:bg-derma-purple-dark"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
};
