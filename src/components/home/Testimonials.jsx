import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prev = () => {
        setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };
    const next = () => {
        setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    };
    return (<section className="py-20 bg-derma-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading eyebrow="PATIENT EXPERIENCES" title="What Our Patients Say." description="Sample patient feedback collected during clinical trial demonstrations." align="left"/>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-3 mt-6 md:mt-0">
              <button onClick={prev} className="w-11 h-11 rounded-full bg-white border border-derma-border flex items-center justify-center text-derma-kombu hover:bg-derma-kombu-light/50 shadow-xs transition-colors" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <button onClick={next} className="w-11 h-11 rounded-full bg-derma-kombu flex items-center justify-center text-white hover:bg-derma-kombu-dark shadow-xs transition-colors" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5 text-white"/>
              </button>
            </div>
        </div>

        {/* 3 Testimonials in Grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (<motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="bg-white rounded-3xl p-7 border border-derma-border shadow-soft hover:shadow-soft-lg flex flex-col justify-between transition-all duration-300 relative">
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-derma-magenta-light flex items-center justify-center text-derma-magenta">
                    <Quote className="w-5 h-5 rotate-180"/>
                  </div>
                  <div className="flex items-center gap-1 text-derma-yellow">
                    {[...Array(item.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current"/>))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-sm md:text-base text-derma-text leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Patient signature & treatment */}
              <div className="pt-4 border-t border-derma-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-derma-purple flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-derma-blue"/>
                    </h4>
                    <p className="text-xs text-derma-magenta font-semibold mt-0.5">
                      {item.treatment}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-derma-kombu bg-derma-kombu-light px-2.5 py-1 rounded-md">
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>))}
        </div>

        {/* Demo disclaimer pill */}
        <div className="mt-8 text-center">
          <span className="inline-block text-xs text-derma-text-muted bg-white border border-derma-border px-4 py-1.5 rounded-full">
            Note: Demonstrative patient comments for website layout preview.
          </span>
        </div>
      </div>
    </section>);
};
