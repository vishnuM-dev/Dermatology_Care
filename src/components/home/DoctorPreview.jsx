import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { DOCTORS } from '../../data/doctors';
import { Calendar, User, ArrowRight, ShieldCheck, Check } from 'lucide-react';
export const DoctorPreview = () => {
    const navigate = useNavigate();
    // Highlight lead doctor Dr. Sarah Jenkins
    const leadDoctor = DOCTORS[0];
    return (<section className="py-20 bg-derma-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="MEET OUR SPECIALISTS" title="Meet Your Skin Care Specialist." align="center" className="mb-14"/>

        <div className="bg-white rounded-3xl lg:rounded-4xl p-6 sm:p-10 lg:p-12 shadow-soft border border-derma-border max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Doctor Portrait with Rounded Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg bg-derma-kombu-subtle border-2 border-derma-border">
                <img
                  src={leadDoctor.image}
                  alt={`${leadDoctor.name} - ${leadDoctor.role}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-derma-purple-deep/75 via-transparent to-transparent pointer-events-none"/>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-derma-yellow text-derma-purple-deep text-xs font-bold rounded-lg mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-derma-purple-deep"/>
                    <span>Board Certified (Demo)</span>
                  </div>
                  <p className="text-lg font-bold">{leadDoctor.name}</p>
                  <p className="text-xs text-derma-pink-light">{leadDoctor.role}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Qualifications & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-derma-kombu bg-derma-kombu-light px-3 py-1 rounded-full mb-3">
                Lead Physician Profile
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-derma-purple">
                {leadDoctor.name}, <span className="text-derma-blue text-xl font-medium">{leadDoctor.title}</span>
              </h3>

              <p className="text-sm font-semibold text-derma-blue mt-1">
                {leadDoctor.qualification}
              </p>

              <blockquote className="my-4 pl-4 border-l-4 border-derma-yellow italic text-sm text-derma-kombu bg-derma-kombu-subtle p-2.5 rounded-r-xl">
                "{leadDoctor.quote}"
              </blockquote>

              <p className="text-sm text-derma-text-muted leading-relaxed mb-6">
                {leadDoctor.bio}
              </p>

              {/* Specializations list */}
              <div className="w-full mb-8">
                <p className="text-xs font-bold text-derma-purple uppercase tracking-wider mb-2.5">
                  Core Specializations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-derma-text">
                  {leadDoctor.specializations.map((spec, i) => (<div key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-derma-blue-light flex items-center justify-center text-derma-blue shrink-0">
                        <Check className="w-2.5 h-2.5"/>
                      </span>
                      <span>{spec}</span>
                    </div>))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button onClick={() => navigate(`/doctors/${leadDoctor.slug}`)} className="inline-flex items-center gap-2 px-6 py-3 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark shadow-sm hover:shadow-md transition-all duration-200">
                  <User className="w-4 h-4 text-derma-yellow"/>
                  <span>View Full Profile</span>
                </button>

                <button onClick={() => navigate('/appointment')} className="inline-flex items-center gap-2 px-6 py-3 bg-derma-yellow text-derma-purple-deep text-sm font-bold rounded-full hover:bg-derma-yellow-hover shadow-sm transition-all duration-200">
                  <Calendar className="w-4 h-4 text-derma-purple-deep"/>
                  <span>Book Consultation</span>
                </button>
              </div>

              {/* View all doctors link */}
              <div className="mt-5">
                <button onClick={() => navigate('/doctors')} className="text-xs font-semibold text-derma-kombu hover:text-derma-purple transition-colors inline-flex items-center gap-1">
                  <span>Meet all our clinic doctors</span>
                  <ArrowRight className="w-3.5 h-3.5"/>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>);
};
