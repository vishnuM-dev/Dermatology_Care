import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Dermatological Rigour',
      desc: 'All therapies are guided strictly by board-certified physicians using medical-grade optics and validated pharmaceutical protocols.',
      icon: <ShieldCheck className="w-6 h-6 text-derma-blue" />,
      bg: 'bg-derma-blue-light',
    },
    {
      title: 'Individualized Formulations',
      desc: 'We do not believe in one-size-fits-all skincare. Every protocol is customized based on Fitzpatrick skin type, oil balance, and dermal sensitivity.',
      icon: <Sparkles className="w-6 h-6 text-derma-magenta" />,
      bg: 'bg-derma-magenta-light',
    },
    {
      title: 'Ethical & Honest Care',
      desc: 'We prioritize skin health over unnecessary procedures, ensuring transparent expectations and realistic timelines for every patient.',
      icon: <Heart className="w-6 h-6 text-derma-kombu" />,
      bg: 'bg-derma-kombu-light',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-derma-kombu-subtle via-derma-kombu-light/30 to-white py-16 md:py-20 border-b border-derma-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-kombu uppercase mb-2 inline-block">
            ABOUT DERMACARE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-derma-purple max-w-3xl mx-auto leading-tight">
            Where Expertise Meets <span className="text-derma-orange">Personalized</span> Skin Care.
          </h1>
          <p className="mt-4 text-base md:text-lg text-derma-text-muted max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to redefine aesthetic dermatology through scientific integrity, patient safety, and compassionate personalized attention.
          </p>
        </div>
      </section>

      {/* Main Story & Interior */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-derma-kombu uppercase">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-derma-purple leading-snug">
                Restoring Health, Enhancing Natural Radiance.
              </h2>
              <p className="text-sm sm:text-base text-derma-text leading-relaxed">
                DermaCare was established by a team of leading dermatologists seeking an alternative to superficial, aggressive beauty trends. We believe authentic skin confidence is rooted in healthy cellular function, balanced sebum biology, and an intact protective moisture barrier.
              </p>
              <p className="text-sm sm:text-base text-derma-text-muted leading-relaxed">
                Our clinic offers a sanctuary where modern clinical diagnostics meet warm, attentive care. Whether managing complex inflammatory conditions like cystic acne and melasma, or rejuvenating sun-stressed dermal structures, our physicians accompany you through every stage of your healing journey.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-derma-border">
                <div className="text-center p-3 bg-derma-soft rounded-2xl border border-derma-border">
                  <span className="block text-2xl font-bold text-derma-kombu">10k+</span>
                  <span className="text-xs text-derma-text-muted font-medium">Patients Treated</span>
                </div>
                <div className="text-center p-3 bg-derma-soft rounded-2xl border border-derma-border">
                  <span className="block text-2xl font-bold text-derma-kombu">15+</span>
                  <span className="text-xs text-derma-text-muted font-medium">Years Experience</span>
                </div>
                <div className="text-center p-3 bg-derma-soft rounded-2xl border border-derma-border">
                  <span className="block text-2xl font-bold text-derma-kombu">99%</span>
                  <span className="text-xs text-derma-text-muted font-medium">Satisfaction Rate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-2 border-derma-border bg-derma-kombu-subtle">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern DermaCare consultation room"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-48 h-48 bg-derma-pink/20 rounded-full blur-2xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-derma-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR VALUES"
            title="The Principles That Guide Our Care"
            description="Every consultation, prescription, and laser pulse is anchored in our commitment to safety and clinical excellence."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-derma-border shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-derma-purple mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-derma-text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
};
