import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DOCTORS } from '../data/doctors';
import { Calendar, Clock, ShieldCheck, GraduationCap, Award, ArrowLeft, CheckCircle2 } from 'lucide-react';
export const DoctorProfile = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const doctor = DOCTORS.find((d) => d.slug === slug);
    if (!doctor) {
        return (<div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-derma-purple">Doctor Not Found</h2>
        <p className="mt-3 text-derma-text-muted text-sm">
          The requested physician profile could not be located.
        </p>
        <Link to="/doctors" className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-derma-purple text-white text-sm font-semibold rounded-full hover:bg-derma-purple-dark">
          <ArrowLeft className="w-4 h-4"/>
          Back to Doctors List
        </Link>
      </div>);
    }
    return (<div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-derma-soft border-b border-derma-border py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-derma-text-muted">
          <Link to="/" className="hover:text-derma-purple transition-colors">Home</Link>
          <span>/</span>
          <Link to="/doctors" className="hover:text-derma-purple transition-colors">Our Doctors</Link>
          <span>/</span>
          <span className="font-semibold text-derma-purple">{doctor.name}</span>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-derma-soft/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Photo & Fast Facts */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-6">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-derma-border bg-derma-kombu-subtle">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Consultation availability box */}
              <div className="w-full max-w-[320px] p-5 bg-derma-kombu-subtle rounded-2xl border border-derma-border space-y-3 shadow-soft">
                <h4 className="text-xs font-bold text-derma-kombu uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-derma-kombu"/>
                  <span>Clinic Availability</span>
                </h4>
                <div className="text-xs text-derma-text space-y-1">
                  <p><strong className="text-derma-kombu">Days:</strong> {doctor.consultationDays.join(', ')}</p>
                  <p><strong className="text-derma-kombu">Hours:</strong> {doctor.consultationHours}</p>
                  <p><strong className="text-derma-kombu">Languages:</strong> {doctor.languages.join(', ')}</p>
                </div>

                <button onClick={() => navigate(`/appointment?doctor=${doctor.id}`)} className="w-full mt-2 py-3 bg-derma-yellow text-derma-purple-deep text-sm font-bold rounded-xl hover:bg-derma-yellow-hover shadow-sm transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-derma-purple-deep"/>
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Biography & Credentials */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-derma-yellow/30 text-derma-purple-deep uppercase tracking-wider">
                  {doctor.role}
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold text-derma-purple mt-2">
                  {doctor.name}, <span className="text-derma-blue text-2xl font-medium">{doctor.title}</span>
                </h1>

                <p className="text-sm font-semibold text-derma-blue mt-1">
                  {doctor.qualification}
                </p>

                {doctor.quote && (<blockquote className="my-5 pl-4 border-l-4 border-derma-yellow text-base italic text-derma-kombu bg-derma-kombu-subtle p-3 rounded-r-xl">
                    "{doctor.quote}"
                  </blockquote>)}

                <p className="text-sm sm:text-base text-derma-text leading-relaxed pt-2">
                  {doctor.bio}
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-lg font-bold text-derma-purple mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-derma-blue"/>
                  <span>Clinical Specializations</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.specializations.map((spec, i) => (<div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-derma-kombu-subtle border border-derma-border text-xs sm:text-sm font-semibold text-derma-kombu">
                      <CheckCircle2 className="w-4 h-4 text-derma-kombu shrink-0"/>
                      <span>{spec}</span>
                    </div>))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-derma-border">
                <div>
                  <h3 className="text-base font-bold text-derma-purple mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-derma-blue"/>
                    <span>Education &amp; Training</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-derma-text">
                    {doctor.education.map((edu, idx) => (<li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-derma-blue mt-1.5 shrink-0"/>
                        <span>{edu}</span>
                      </li>))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-derma-purple mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-derma-yellow"/>
                    <span>Board Certifications</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-derma-text">
                    {doctor.certifications.map((cert, idx) => (<li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-derma-yellow mt-1.5 shrink-0"/>
                        <span>{cert}</span>
                      </li>))}
                  </ul>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-4 bg-derma-kombu-subtle rounded-2xl border border-derma-border text-xs text-derma-text-muted">
                <span className="font-bold text-derma-kombu">Presentation Notice:</span> Doctor biography and education details are demonstrative placeholders prepared for clinical website approval.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>);
};
