import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { X, ZoomIn, Info } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'skin', label: 'Skin Care' },
    { id: 'hair', label: 'Hair Care' },
    { id: 'laser', label: 'Laser Care' },
    { id: 'clinic', label: 'Clinic Facility' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-derma-kombu-subtle via-derma-kombu-light/30 to-white py-16 md:py-20 border-b border-derma-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-kombu uppercase mb-2 inline-block">
            CLINICAL PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-derma-purple max-w-3xl mx-auto leading-tight">
            Explore <span className="text-derma-orange">Treatment Progress</span> &amp; Clinic
          </h1>
          <p className="mt-4 text-base md:text-lg text-derma-text-muted max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our modern clinical procedure suites, advanced laser equipment, and illustrative treatment demonstrations.
          </p>

          {/* Filter Tabs: Active in Yellow with Dark Purple Text */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${activeCategory === c.id
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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Medical disclaimer notice banner */}
          <div className="mb-10 p-4 bg-derma-kombu-subtle border border-derma-border rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-derma-text">
            <Info className="w-5 h-5 text-derma-kombu shrink-0" />
            <span>
              <strong className="text-derma-kombu">Clinical Transparency Note:</strong> Results vary based on individual genetic factors, skin type, and adherence to home care. All imagery is illustrative and demonstrative.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-3xl overflow-hidden bg-derma-kombu-subtle border border-derma-border shadow-soft hover:shadow-soft-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>

                {/* Overlay on hover in theme purple gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-derma-purple-deep/90 via-derma-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-derma-yellow">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-derma-yellow font-bold">
                    <ZoomIn className="w-4 h-4 text-derma-yellow" />
                    <span>Click to Expand</span>
                  </div>
                </div>

                {/* Static card footer */}
                <div className="p-4 bg-white border-t border-derma-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-derma-purple truncate">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold text-derma-magenta bg-derma-pink-light px-2 py-0.5 rounded-full shrink-0">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-derma-purple-deep/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-derma-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-derma-purple flex items-center justify-center hover:bg-white shadow-md transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-derma-kombu-subtle">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-derma-purple-deep/90 text-derma-yellow text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                {lightboxItem.categoryLabel}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-derma-purple">
                {lightboxItem.title}
              </h3>
              <p className="mt-2 text-sm text-derma-text leading-relaxed">
                {lightboxItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-derma-border flex items-center justify-between text-xs text-derma-text-muted">
                <span>DermaCare Clinical Demo Portfolio</span>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="px-4 py-2 bg-derma-kombu text-white font-bold rounded-full hover:bg-derma-kombu-dark text-xs transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
};
