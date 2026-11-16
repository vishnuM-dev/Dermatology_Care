import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export const AppointmentCTA = () => {
    const navigate = useNavigate();
    return (<section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border border-derma-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
            
            {/* Left Side: Modern Clinic Reception Image */}
            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-derma-kombu-subtle">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="DermaCare Modern Clinic Reception"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80';
                }}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Clinic wall logo badge */}
              <div className="absolute top-6 left-6 glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-sm border border-white/60">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
                    <path d="M22 4C22 4 8 18 8 28C8 35.732 14.268 42 22 42C29.732 42 36 35.732 36 28C36 18 22 4 22 4Z" fill="#E885CF"/>
                    <path d="M15 14C15 14 10 22 10 28C10 34.6274 15.3726 40 22 40C28.6274 40 34 34.6274 34 28C34 24.5 32 20 28 17C23 27 18 31 15 14Z" fill="#7F27A8"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-derma-purple leading-none">
                    DermaCare
                  </span>
                  <span className="text-[8px] font-semibold text-derma-magenta uppercase leading-none mt-0.5">
                    Dermatology &amp; Aesthetics
                  </span>
                </div>
              </div>

              {/* Gradient blend on desktop towards right side */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-derma-purple pointer-events-none"/>
            </div>

            {/* Right Side: Smooth Purple Gradient Banner per Section 7 */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden text-white" style={{
            background: 'linear-gradient(120deg, #7F27A8 0%, #681F89 100%)',
        }}>
              {/* Pink & Magenta Decorative Wave SVGs */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none opacity-25">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <path d="M0,100 C50,150 150,50 200,100 L200,200 L0,200 Z" fill="#E885CF"/>
                  <path d="M30,120 C70,160 140,70 200,130 L200,200 L30,200 Z" fill="#FFD400" fillOpacity="0.4"/>
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-derma-pink/15 rounded-full blur-2xl pointer-events-none"/>

              <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight tracking-tight text-white">
                  Book Your Dermatology <br className="hidden sm:inline"/>
                  Consultation Today.
                </h3>

                <p className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
                  Take the first step towards healthier, clearer and more confident skin.
                </p>

                {/* Banner Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {/* Primary Happy Yellow Button with Dark Purple Text */}
                  <button onClick={() => navigate('/appointment')} className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-derma-yellow text-derma-purple-deep text-sm sm:text-base font-bold rounded-xl hover:bg-derma-yellow-hover shadow-lg hover:shadow-glow-yellow transition-all duration-200 active:scale-[0.98]">
                    <Calendar className="w-4 h-4 text-derma-purple-deep"/>
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"/>
                  </button>

                  {/* Secondary Outline White Button */}
                  <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border-2 border-white/90 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white/15 transition-all duration-200 active:scale-[0.98]">
                    <Phone className="w-4 h-4"/>
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>);
};
