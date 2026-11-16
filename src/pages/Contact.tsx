import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Dermatology Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-derma-kombu-subtle via-derma-kombu-light/30 to-white py-16 md:py-20 border-b border-derma-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-kombu uppercase mb-2 inline-block">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-derma-purple max-w-3xl mx-auto leading-tight">
            We Are Here to <span className="text-derma-orange">Guide</span> Your Skin Health
          </h1>
          <p className="mt-4 text-base md:text-lg text-derma-text-muted max-w-2xl mx-auto leading-relaxed">
            Have questions about a skin condition, consultation fees, or laser technology? Our clinical front desk is always glad to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-derma-purple mb-3">
                  Clinic Information
                </h2>
                <p className="text-sm text-derma-text-muted leading-relaxed">
                  Located in the heart of Medical City with dedicated patient valet parking and accessible elevators.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-derma-kombu-subtle rounded-2xl border border-derma-border">
                  <div className="w-10 h-10 rounded-xl bg-derma-kombu-light flex items-center justify-center text-derma-kombu shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-derma-kombu">Clinic Address</h3>
                    <p className="text-xs sm:text-sm text-derma-text-muted mt-1 leading-relaxed">
                      452 Wellness Pavilion, Suite 300<br />
                      Aesthetic Avenue, Medical City, MC 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-derma-kombu-subtle rounded-2xl border border-derma-border">
                  <div className="w-10 h-10 rounded-xl bg-derma-kombu-light flex items-center justify-center text-derma-kombu shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-derma-kombu">Phone &amp; WhatsApp</h3>
                    <p className="text-xs sm:text-sm text-derma-text-muted mt-1">
                      Main Clinic: (800) 555-DERM / (800) 555-3376<br />
                      WhatsApp Helpline: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-derma-kombu-subtle rounded-2xl border border-derma-border">
                  <div className="w-10 h-10 rounded-xl bg-derma-kombu-light flex items-center justify-center text-derma-kombu shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-derma-kombu">Email Inquiries</h3>
                    <p className="text-xs sm:text-sm text-derma-text-muted mt-1">
                      General: care@dermacare-clinic.demo<br />
                      Appointments: book@dermacare-clinic.demo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-derma-kombu-subtle rounded-2xl border border-derma-border">
                  <div className="w-10 h-10 rounded-xl bg-derma-kombu-light flex items-center justify-center text-derma-kombu shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-derma-kombu">Consultation Hours</h3>
                    <p className="text-xs sm:text-sm text-derma-text-muted mt-1">
                      <strong>Monday – Friday:</strong> 8:30 AM – 6:30 PM<br />
                      <strong>Saturday:</strong> 9:00 AM – 4:00 PM<br />
                      <strong>Sunday:</strong> Closed (Emergency on-call)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden border border-derma-border shadow-soft bg-derma-kombu-subtle relative h-52 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-8 h-8 text-derma-kombu mb-2 animate-bounce" />
                <h4 className="text-sm font-bold text-derma-kombu">Interactive Location Map</h4>
                <p className="text-xs text-derma-text-muted mt-1 max-w-xs">
                  Aesthetic Avenue Medical Complex (GPS: 34.0522 N, -118.2437 W)
                </p>
                <span className="mt-3 text-[10px] font-semibold bg-white px-3 py-1 rounded-full text-derma-kombu shadow-xs border border-derma-border">
                  Valet Parking Available
                </span>
              </div>
            </div>

            {/* Right: Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-10 border border-derma-border shadow-soft">
                <h3 className="text-2xl font-bold text-derma-purple mb-2">
                  Send a Clinic Message
                </h3>
                <p className="text-xs sm:text-sm text-derma-text-muted mb-6">
                  Fill in your details below and our clinical coordinator will reach out within 24 business hours.
                </p>

                {submitted ? (
                  <div className="p-8 bg-derma-kombu-subtle rounded-2xl border border-derma-border text-center space-y-4 animate-in zoom-in-95">
                    <div className="w-14 h-14 rounded-full bg-derma-kombu text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-derma-kombu">
                      Message Received!
                    </h4>
                    <p className="text-sm text-derma-text-muted max-w-md mx-auto">
                      Thank you for contacting DermaCare. Your demo inquiry has been registered. Our reception team will review your message promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'General Dermatology Inquiry',
                          message: '',
                        });
                      }}
                      className="mt-4 px-6 py-2.5 bg-derma-kombu text-white text-xs font-semibold rounded-full hover:bg-derma-kombu-dark transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-3 bg-derma-kombu-subtle border border-derma-border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 focus:ring-derma-kombu"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3 bg-derma-kombu-subtle border border-derma-border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 focus:ring-derma-kombu"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 bg-derma-kombu-subtle border border-derma-border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 focus:ring-derma-kombu"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full p-3 bg-derma-kombu-subtle border border-derma-border rounded-xl text-sm text-derma-purple focus:outline-none focus:ring-2 focus:ring-derma-kombu"
                        >
                          <option value="General Dermatology Inquiry">General Dermatology Inquiry</option>
                          <option value="Acne &amp; Scarring Evaluation">Acne &amp; Scarring Evaluation</option>
                          <option value="Pigmentation / Melasma Consultation">Pigmentation / Melasma Consultation</option>
                          <option value="Hair &amp; Scalp Trichology">Hair &amp; Scalp Trichology</option>
                          <option value="Laser Skin Rejuvenation">Laser Skin Rejuvenation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                        Your Message or Question *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please describe how we can assist you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 bg-derma-kombu-subtle border border-derma-border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 focus:ring-derma-kombu"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark shadow-sm hover:shadow-glow-kombu transition-all active:scale-98"
                      >
                        <Send className="w-4 h-4 text-derma-yellow" />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
};
