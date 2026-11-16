import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TREATMENTS } from '../data/treatments';
import { Accordion } from '../components/ui/Accordion';
import {
  Calendar,
  Clock,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';

export const TreatmentDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-derma-purple">Treatment Not Found</h2>
        <p className="mt-3 text-derma-text-muted text-sm">
          The requested clinical service does not exist or has been relocated.
        </p>
        <Link
          to="/treatments"
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-derma-purple text-white text-sm font-semibold rounded-full hover:bg-derma-purple-dark"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Treatments
        </Link>
      </div>
    );
  }

  // Format FAQs for Accordion
  const accordionItems = treatment.faqs.map((faq, i) => ({
    id: `faq-${i}`,
    question: faq.question,
    answer: faq.answer,
    category: 'Treatments' as const,
  }));

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-derma-soft border-b border-derma-border py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-derma-text-muted">
          <Link to="/" className="hover:text-derma-purple transition-colors">Home</Link>
          <span>/</span>
          <Link to="/treatments" className="hover:text-derma-purple transition-colors">Treatments</Link>
          <span>/</span>
          <span className="font-semibold text-derma-purple">{treatment.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-derma-soft/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-derma-pink-light text-derma-magenta uppercase tracking-wider">
                {treatment.categoryLabel}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-derma-purple leading-tight">
                {treatment.title}
              </h1>

              <p className="text-base sm:text-lg text-derma-magenta font-semibold">
                {treatment.shortDescription}
              </p>

              <p className="text-sm sm:text-base text-derma-text leading-relaxed pt-2">
                {treatment.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate(`/appointment?treatment=${treatment.id}`)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-derma-yellow text-derma-purple-deep font-bold rounded-full hover:bg-derma-yellow-hover shadow-md transition-all active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-derma-purple-deep" />
                  <span>Book Consultation For This Treatment</span>
                </button>

                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2 px-5 py-3 border-2 border-derma-kombu text-derma-kombu font-semibold rounded-full hover:bg-derma-kombu hover:text-white text-sm transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Treatments</span>
                </Link>
              </div>
            </div>

            {/* Treatment Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-2 border-derma-border bg-derma-kombu-subtle">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-full text-xs font-bold text-derma-kombu">
                  Certified Clinical Protocol
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Treatment Metrics */}
      <section className="py-8 bg-derma-soft border-y border-derma-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-derma-border shadow-xs">
              <Clock className="w-6 h-6 text-derma-blue shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-bold uppercase text-derma-text-muted">Duration</span>
                <span className="text-sm font-bold text-derma-purple">{treatment.duration}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-derma-border shadow-xs">
              <RotateCcw className="w-6 h-6 text-derma-magenta shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-bold uppercase text-derma-text-muted">Recovery Time</span>
                <span className="text-sm font-bold text-derma-purple">{treatment.recoveryTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-derma-border shadow-xs">
              <Sparkles className="w-6 h-6 text-derma-yellow shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-bold uppercase text-derma-text-muted">Recommended Course</span>
                <span className="text-sm font-bold text-derma-purple">{treatment.recommendedSessions}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concerns Addressed & Procedure Protocol */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Concerns */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold text-derma-purple flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-derma-blue" />
                <span>Primary Indications</span>
              </h2>
              <p className="text-sm text-derma-text-muted">
                This protocol is customized to resolve the following dermatological symptoms:
              </p>

              <div className="space-y-3">
                {treatment.concerns.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-derma-soft rounded-2xl border border-derma-border">
                    <CheckCircle2 className="w-5 h-5 text-derma-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-derma-purple">{c}</span>
                  </div>
                ))}
              </div>

              {/* General Aftercare Tips */}
              <div className="mt-8 p-6 bg-derma-kombu-subtle rounded-3xl border border-derma-border">
                <h3 className="text-base font-bold text-derma-kombu mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-derma-kombu" />
                  <span>General Post-Procedure Care</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-derma-text">
                  {treatment.aftercareTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-derma-kombu mt-2 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Step-by-Step Procedure Process */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-derma-purple">
                Treatment Roadmap
              </h2>
              <p className="text-sm text-derma-text-muted">
                What occurs during your personalized in-clinic clinical appointment:
              </p>

              <div className="space-y-6">
                {treatment.procedureSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-white rounded-3xl border border-derma-border shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-derma-purple text-derma-yellow font-black text-lg flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-derma-purple">
                        {step.title}
                      </h3>
                      <p className="text-sm text-derma-text-muted mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Treatment FAQs */}
              {accordionItems.length > 0 && (
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-derma-purple mb-4">
                    Treatment Specific Questions
                  </h3>
                  <Accordion items={accordionItems} defaultOpenIndex={0} />
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Booking Bar at Bottom: Purple Background with Happy Yellow Button */}
      <section className="py-12 bg-derma-purple-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Begin Your Care for {treatment.title}?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-pink-100">
            Book an appointment with our clinical specialists today.
          </p>
          <button
            onClick={() => navigate(`/appointment?treatment=${treatment.id}`)}
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-derma-yellow text-derma-purple-deep font-bold rounded-full hover:bg-derma-yellow-hover transition-all shadow-lg hover:shadow-glow-yellow"
          >
            <Calendar className="w-4 h-4 text-derma-purple-deep" />
            <span>Book Appointment Online</span>
          </button>
        </div>
      </section>
    </div>
  );
};
