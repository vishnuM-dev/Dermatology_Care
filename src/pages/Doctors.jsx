import React from 'react';
import { DOCTORS } from '../data/doctors';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Calendar, User, Clock, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
export const Doctors = () => {
    const navigate = useNavigate();
    return (<div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-derma-kombu-subtle via-derma-kombu-light/30 to-white py-16 md:py-20 border-b border-derma-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-kombu uppercase mb-2 inline-block">
            OUR MEDICAL SPECIALISTS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-derma-purple max-w-3xl mx-auto leading-tight">
            Meet Your <span className="text-derma-orange">Dermatology</span> Experts
          </h1>
          <p className="mt-4 text-base md:text-lg text-derma-text-muted max-w-2xl mx-auto leading-relaxed">
            Our physicians blend academic rigour with gentle aesthetic artistry to provide comprehensive dermal and trichological care.
          </p>
        </div>
      </section>

      {/* Doctor Cards Catalog */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {DOCTORS.map((doc) => (<div key={doc.id} className="bg-white rounded-3xl lg:rounded-4xl p-6 sm:p-10 border border-derma-border shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Photo Column */}
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-derma-border bg-derma-kombu-subtle">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-3 left-3 right-3 glass-panel px-3 py-1.5 rounded-xl text-center">
                        <span className="text-xs font-bold text-derma-kombu">
                          {doc.experienceYears}+ Years Clinical Experience
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-8 flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-derma-yellow/30 text-derma-purple-deep uppercase tracking-wider">
                        {doc.role}
                      </span>
                      <span className="text-xs text-derma-text-muted font-medium">
                        • {doc.qualification}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-derma-purple">
                      {doc.name}, <span className="text-derma-blue text-xl font-normal">{doc.title}</span>
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-derma-text leading-relaxed">
                      {doc.bio}
                    </p>

                    {/* Specializations Grid */}
                    <div className="w-full my-5 pt-4 border-t border-derma-border">
                      <h4 className="text-xs font-bold text-derma-kombu uppercase tracking-wider mb-2">
                        Areas of Expertise:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-derma-text">
                        {doc.specializations.map((spec, i) => (<div key={i} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-derma-blue-light flex items-center justify-center text-derma-blue shrink-0">
                              <Check className="w-2.5 h-2.5"/>
                            </span>
                            <span>{spec}</span>
                          </div>))}
                      </div>
                    </div>

                    {/* Schedule info */}
                    <div className="flex items-center gap-2 text-xs text-derma-kombu font-medium mb-6 bg-derma-kombu-light/60 border border-derma-border px-3.5 py-2 rounded-xl">
                      <Clock className="w-4 h-4 shrink-0 text-derma-kombu"/>
                      <span>Consultation Days: {doc.consultationDays.join(', ')} ({doc.consultationHours})</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link to={`/doctors/${doc.slug}`} className="inline-flex items-center gap-2 px-6 py-2.5 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark shadow-sm transition-all">
                        <User className="w-4 h-4 text-derma-yellow"/>
                        <span>View Doctor Profile</span>
                      </Link>

                      <button onClick={() => navigate(`/appointment?doctor=${doc.id}`)} className="inline-flex items-center gap-2 px-6 py-2.5 bg-derma-yellow text-derma-purple-deep text-sm font-bold rounded-full hover:bg-derma-yellow-hover shadow-sm transition-all">
                        <Calendar className="w-4 h-4 text-derma-purple-deep"/>
                        <span>Book With {doc.name.split(' ')[1]}</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <AppointmentCTA />
    </div>);
};
