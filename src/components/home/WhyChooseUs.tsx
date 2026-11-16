import React from 'react';
import { UserCheck, FlaskConical, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'f1',
      title: 'Personalized Consultation',
      description: 'In-depth dermal assessments tailored to your unique skin biology.',
      icon: <UserCheck className="w-6 h-6 text-derma-kombu" strokeWidth={2.2} />,
      bg: 'bg-derma-kombu-light',
    },
    {
      id: 'f2',
      title: 'Evidence-Based Treatments',
      description: 'Clinically proven protocols backed by peer-reviewed dermatology research.',
      icon: <FlaskConical className="w-6 h-6 text-derma-orange" strokeWidth={2.2} />,
      bg: 'bg-derma-orange-light',
    },
    {
      id: 'f3',
      title: 'Patient-Centered Care',
      description: 'Compassionate, transparent guidance prioritizing comfort and long-term health.',
      icon: <Heart className="w-6 h-6 text-derma-magenta" strokeWidth={2.2} />,
      bg: 'bg-derma-magenta-light',
    },
    {
      id: 'f4',
      title: 'Modern Clinical Approach',
      description: 'State-of-the-art optical lasers and diagnostic imaging technologies.',
      icon: <Zap className="w-6 h-6 text-derma-blue" strokeWidth={2.2} />,
      bg: 'bg-derma-blue-light',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-derma-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Side: Title & Golden Underline */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-magenta uppercase mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-derma-purple leading-tight tracking-tight">
              Your Skin Deserves <br className="hidden sm:inline" />
              Exceptional Care.
            </h2>
            {/* Short golden-yellow underline beneath the heading */}
            <div className="w-16 h-1.5 bg-derma-yellow rounded-full mt-4" />
            <p className="mt-4 text-sm md:text-base text-derma-text-muted leading-relaxed max-w-sm">
              We integrate clinical precision with compassionate aesthetic care to ensure safe, natural, and enduring results.
            </p>
          </div>

          {/* Right Side: 4 Compact Feature Cards */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group flex flex-col items-center text-center p-5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-derma-border shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 hover:border-derma-pink/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-derma-kombu group-hover:text-derma-purple transition-colors duration-200">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
