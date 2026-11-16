import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TreatmentCard } from '../ui/TreatmentCard';
import { TREATMENTS } from '../../data/treatments';
import { motion } from 'framer-motion';
export const TreatmentsSection = () => {
    // Grab the exact 4 treatments featured on the reference homepage
    const homeTreatments = TREATMENTS.slice(0, 4);
    return (<section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <SectionHeading eyebrow="OUR TREATMENTS" eyebrowColor="purple" title="Comprehensive Care for Your Skin & Hair" align="center" className="mb-14"/>

        {/* 4 Cards in 1 Row on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {homeTreatments.map((treatment, idx) => (<motion.div key={treatment.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <TreatmentCard treatment={treatment}/>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
