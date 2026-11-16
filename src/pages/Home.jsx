import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TreatmentsSection } from '../components/home/TreatmentsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AboutPreview } from '../components/home/AboutPreview';
import { PatientJourney } from '../components/home/PatientJourney';
import { DoctorPreview } from '../components/home/DoctorPreview';
import { Testimonials } from '../components/home/Testimonials';
import { FAQSection } from '../components/home/FAQSection';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
export const Home = () => {
    return (<div className="flex flex-col w-full">
      {/* 1. Hero Section matching reference */}
      <HeroSection />

      {/* 2. Our Treatments 4-card Section matching reference */}
      <TreatmentsSection />

      {/* 3. Why Choose Us Section matching reference */}
      <WhyChooseUs />

      {/* 4. About Our Clinic Preview */}
      <AboutPreview />

      {/* 5. Patient Journey / How It Works */}
      <PatientJourney />

      {/* 6. Lead Specialist Doctor Preview */}
      <DoctorPreview />

      {/* 7. Patient Testimonials */}
      <Testimonials />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Appointment CTA Banner matching reference */}
      <AppointmentCTA />
    </div>);
};
