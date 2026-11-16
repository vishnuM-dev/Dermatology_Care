import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Shield, Leaf, Cpu, Sparkles, Sun, Smile, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
export const HeroSection = () => {
    const navigate = useNavigate();
    return (<section className="relative overflow-hidden bg-gradient-to-b from-white via-derma-kombu-subtle/60 to-derma-kombu-subtle pt-6 pb-20 md:py-16 lg:py-24">
      {/* Decorative background pink & blue glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-derma-pink/15 rounded-full blur-3xl pointer-events-none -z-10"/>
      <div className="absolute -bottom-10 -left-20 w-[400px] h-[400px] bg-derma-blue/20 rounded-full blur-2xl pointer-events-none -z-10"/>

      {/* Decorative Golden Yellow & Magenta Accent Waves (bottom-right matching reference) */}
      <div className="absolute -bottom-24 right-0 w-[420px] h-[260px] pointer-events-none -z-10 opacity-90 hidden sm:block">
        <svg viewBox="0 0 420 260" fill="none" className="w-full h-full">
          <path d="M50 260C140 180 260 190 420 80L420 260L50 260Z" fill="#FFD400" fillOpacity="0.85"/>
          <path d="M0 260C120 200 240 220 420 130L420 260L0 260Z" fill="#E885CF" fillOpacity="0.35"/>
          <path d="M80 260C170 210 280 230 420 160L420 260L80 260Z" fill="#C1008F" fillOpacity="0.2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (Approx 50% / 6-7 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10">
            {/* Eyebrow in Magenta */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-derma-magenta uppercase">
                EXPERT DERMATOLOGY CARE
              </span>
            </motion.div>

            {/* Main Heading: Healthy Skin. (Purple), Timeless (Deep Purple), Confidence. (Orange) */}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] font-bold leading-[1.12] tracking-tight">
              <span className="text-derma-purple">Healthy Skin.</span> <br />
              <span className="text-derma-purple-deep">Timeless </span>
              <span className="text-derma-orange">Confidence.</span>
            </motion.h1>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 text-base sm:text-lg text-derma-text-muted max-w-xl leading-relaxed">
              Advanced dermatology and personalized aesthetic care to help you look and feel your best.
            </motion.p>

            {/* Buttons Row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Button: Purple */}
              <button onClick={() => navigate('/appointment')} className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-derma-purple text-white text-sm sm:text-base font-semibold rounded-full hover:bg-derma-purple-dark shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]">
                <Calendar className="w-4 h-4 text-white"/>
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"/>
              </button>

              {/* Secondary Button: Kombu Green Outline with White Text on Hover */}
              <button onClick={() => navigate('/treatments')} className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-derma-kombu text-derma-kombu text-sm sm:text-base font-semibold rounded-full hover:bg-derma-kombu hover:text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]">
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-derma-kombu group-hover:text-white transition-colors duration-200"/>
              </button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 pt-6 border-t border-derma-border flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-derma-kombu">
              {/* Item 1: Expert Care (Magenta) */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-derma-magenta-light flex items-center justify-center text-derma-magenta shrink-0">
                  <Shield className="w-4 h-4"/>
                </div>
                <span>Expert Care</span>
              </div>

              {/* Separator */}
              <span className="hidden sm:inline-block w-px h-5 bg-derma-border"/>

              {/* Item 2: Personalized Treatments (Pond Blue) */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-derma-blue-light flex items-center justify-center text-derma-blue shrink-0">
                  <Leaf className="w-4 h-4"/>
                </div>
                <span>Personalized Treatments</span>
              </div>

              {/* Separator */}
              <span className="hidden sm:inline-block w-px h-5 bg-derma-border"/>

              {/* Item 3: Modern Technology (Orange) */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-derma-orange-light flex items-center justify-center text-derma-orange shrink-0">
                  <Cpu className="w-4 h-4"/>
                </div>
                <span>Modern Technology</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Pond Blue Circle, Yellow Ring & Floating Panel */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">

            {/* The circular composition container */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square flex items-center justify-center">
              {/* Large Pond Blue Circular Backdrop */}
              <div className="absolute inset-4 sm:inset-6 rounded-full bg-gradient-to-tr from-derma-blue via-derma-blue-light to-white/70 -z-10 shadow-glow-blue"/>

              {/* Thin Decorative Yellow Outline Ring */}
              <div className="absolute inset-1 sm:inset-2 rounded-full border-2 border-derma-yellow/70 pointer-events-none -z-10"/>
              <div className="absolute -inset-2 rounded-full border border-derma-pink/40 pointer-events-none -z-10"/>

              {/* Natural Close-up Skincare Portrait */}
              <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden shadow-soft-lg border-4 border-white bg-derma-kombu-subtle">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
                  alt="Healthy, glowing natural skin portrait - DermaCare"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85';
                  }}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                />
                {/* Soft gradient blend at edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-derma-blue/20 via-transparent to-transparent pointer-events-none"/>
              </div>

              {/* Floating Service Card on Right Side over Hero Image */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="absolute -right-2 sm:right-2 top-8 sm:top-14 glass-panel rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-xl z-20 w-[170px] sm:w-[200px]">
                <div className="flex flex-col space-y-2.5 sm:space-y-3">
                  {/* Service Item 1: Skin Care (Yellow Icon) */}
                  <div onClick={() => navigate('/treatments')} className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-derma-pink-subtle cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-derma-yellow flex items-center justify-center text-derma-purple-deep shrink-0 shadow-xs">
                      <Smile className="w-4 h-4"/>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-derma-purple">
                      Skin Care
                    </span>
                  </div>

                  {/* Service Item 2: Hair Care (Pond Blue Icon) */}
                  <div onClick={() => navigate('/treatments')} className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-derma-pink-subtle cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-derma-blue-light flex items-center justify-center text-derma-blue shrink-0 shadow-xs">
                      <Activity className="w-4 h-4"/>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-derma-purple">
                      Hair Care
                    </span>
                  </div>

                  {/* Service Item 3: Aesthetic Care (Magenta Icon) */}
                  <div onClick={() => navigate('/treatments')} className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-derma-pink-subtle cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-derma-magenta-light flex items-center justify-center text-derma-magenta shrink-0 shadow-xs">
                      <Sparkles className="w-4 h-4"/>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-derma-purple">
                      Aesthetic Care
                    </span>
                  </div>

                  {/* Service Item 4: Laser Treatments (Orange Icon) */}
                  <div onClick={() => navigate('/treatments')} className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-derma-pink-subtle cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-derma-orange-light flex items-center justify-center text-derma-orange shrink-0 shadow-xs">
                      <Sun className="w-4 h-4"/>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-derma-purple">
                      Laser Treatments
                    </span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle organic bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"/>
        </svg>
      </div>
    </section>);
};
