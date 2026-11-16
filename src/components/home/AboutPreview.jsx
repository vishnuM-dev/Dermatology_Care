import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export const AboutPreview = () => {
    const navigate = useNavigate();
    const highlights = [
        {
            title: 'Doctor-Led Consultations',
            desc: 'Direct evaluations by board-certified dermatologists using advanced dermal diagnostics.',
        },
        {
            title: 'Evidence-Based Protocols',
            desc: 'Safe, FDA-cleared optical laser technology and medical-grade topical formulations.',
        },
        {
            title: 'Transparent Care Plans',
            desc: 'Honest expectations, zero aggressive upselling, and clear progress tracking.',
        },
    ];
    return (<section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clinic Imagery & Decorative Elements */}
          <div className="lg:col-span-6 relative">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-derma-border bg-derma-kombu-subtle">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" alt="DermaCare State-of-the-art Medical Clinic" className="w-full aspect-[4/3] object-cover object-center"/>
              <div className="absolute inset-0 bg-gradient-to-t from-derma-purple-deep/40 via-transparent to-transparent pointer-events-none"/>

              {/* Floating clinic badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-derma-kombu text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-derma-kombu uppercase tracking-wider">
                      Center of Excellence
                    </p>
                    <p className="text-sm font-bold text-derma-purple">
                      Clinical &amp; Aesthetic Dermatology
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-derma-purple-deep bg-derma-yellow px-3 py-1 rounded-full">
                  Modern Care
                </span>
              </div>
            </motion.div>

            {/* Decorative pink accent glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-derma-pink/25 rounded-full blur-xl -z-10 pointer-events-none"/>
          </div>

          {/* Right Column: Narrative, Mission & Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading eyebrow="ABOUT OUR CLINIC" title="Where Expertise Meets Personalized Skin Care." align="left" className="mb-6"/>

            <p className="text-sm sm:text-base text-derma-text-muted leading-relaxed mb-6">
              At DermaCare, we unite medical rigour with advanced aesthetic science. Rather than quick fixes, our board-certified dermatologists focus on cellular restoration, repairing your skin barrier, balancing follicular vitality, and tailoring every session to your lifestyle.
            </p>

            {/* 3 Highlights */}
            <div className="space-y-4 w-full mb-8">
              {highlights.map((h, i) => (<div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-derma-kombu-subtle border border-derma-border">
                  <CheckCircle2 className="w-5 h-5 text-derma-kombu shrink-0 mt-0.5"/>
                  <div>
                    <h4 className="text-sm font-bold text-derma-kombu">{h.title}</h4>
                    <p className="text-xs text-derma-text-muted mt-0.5 leading-relaxed">{h.desc}</p>
                  </div>
                </div>))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => navigate('/about')} className="inline-flex items-center gap-2 px-6 py-3 bg-derma-purple text-white text-sm font-semibold rounded-full hover:bg-derma-purple-dark shadow-sm hover:shadow-md transition-all duration-200">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-derma-yellow"/>
              </button>
              <button onClick={() => navigate('/doctors')} className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-derma-kombu text-derma-kombu text-sm font-semibold rounded-full hover:bg-derma-kombu hover:text-white transition-all duration-200">
                <span>Meet Our Team</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>);
};
