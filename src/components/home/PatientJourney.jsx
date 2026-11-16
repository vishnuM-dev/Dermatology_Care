import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CalendarCheck, Stethoscope, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
export const PatientJourney = () => {
    const steps = [
        {
            num: '01',
            title: 'Book Your Appointment',
            subtitle: 'Select your preferred date and time.',
            desc: 'Choose your desired treatment, select your doctor, and lock in an appointment slot that fits your schedule smoothly.',
            icon: <CalendarCheck className="w-6 h-6 text-derma-blue"/>,
            bg: 'bg-derma-blue-light',
        },
        {
            num: '02',
            title: 'Consult Your Dermatologist',
            subtitle: 'Discuss your skin and hair concerns.',
            desc: 'Experience a focused diagnostic assessment with digital imaging, discussing your health history and aesthetic goals.',
            icon: <Stethoscope className="w-6 h-6 text-derma-magenta"/>,
            bg: 'bg-derma-magenta-light',
        },
        {
            num: '03',
            title: 'Begin Your Care Plan',
            subtitle: 'Receive personalized recommendations & guidance.',
            desc: 'Embark on your targeted in-clinic procedures and tailored medical home regimen, backed by regular progress check-ins.',
            icon: <Sparkles className="w-6 h-6 text-derma-kombu"/>,
            bg: 'bg-derma-kombu-light',
        },
    ];
    return (<section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="HOW IT WORKS" title="Your Journey to Healthier Skin." description="A transparent, clinically guided process designed to ensure lasting clarity, safety, and dermal wellness." align="center" className="mb-16"/>

        <div className="relative">
          {/* Subtle connector line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] -translate-y-6 h-0.5 border-t-2 border-dashed border-derma-border -z-0"/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (<motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="bg-white rounded-3xl p-8 border border-derma-border shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center relative group">
                {/* Step indicator badge: Happy Yellow with dark purple text */}
                <div className="w-12 h-12 rounded-2xl bg-derma-yellow text-derma-purple-deep font-black text-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <span className="tracking-tight">{step.num}</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300`}>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-derma-purple mb-1.5">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-semibold text-derma-magenta mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-derma-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>))}
          </div>
        </div>
      </div>
    </section>);
};
