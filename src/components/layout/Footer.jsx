import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Calendar } from 'lucide-react';
import { TREATMENTS } from '../../data/treatments';
export const Footer = () => {
    return (<footer className="bg-derma-purple-deep text-white pt-16 pb-8 border-t-4 border-derma-yellow relative overflow-hidden">
      {/* Decorative background glow accents in theme pink & blue */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-derma-pink/15 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-derma-blue/15 rounded-full blur-3xl pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Column 1: Clinic Brand & Info */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl p-1.5 backdrop-blur-sm">
                <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
                  <path d="M22 4C22 4 8 18 8 28C8 35.732 14.268 42 22 42C29.732 42 36 35.732 36 28C36 18 22 4 22 4Z" fill="#E885CF"/>
                  <path d="M15 14C15 14 10 22 10 28C10 34.6274 15.3726 40 22 40C28.6274 40 34 34.6274 34 28C34 24.5 32 20 28 17C23 27 18 31 15 14Z" fill="#FFD400"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-2xl font-bold tracking-tight text-white">Derma</span>
                  <span className="text-2xl font-bold tracking-tight text-derma-yellow">Care</span>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-derma-pink uppercase">
                  Dermatology &amp; Aesthetics
                </span>
              </div>
            </Link>

            <p className="text-sm text-purple-100/85 leading-relaxed">
              Advanced clinical dermatology, laser aesthetics, and personalized hair restoration led by certified medical specialists.
            </p>

            <div className="flex items-center gap-2 text-xs text-derma-yellow bg-derma-yellow/15 border border-derma-yellow/40 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-derma-yellow"/>
              <span className="font-semibold text-derma-yellow">Evidence-Based Medical Practice</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#social" className="w-9 h-9 rounded-full bg-white/10 hover:bg-derma-yellow hover:text-derma-purple-deep flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#social" className="w-9 h-9 rounded-full bg-white/10 hover:bg-derma-yellow hover:text-derma-purple-deep flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#social" className="w-9 h-9 rounded-full bg-white/10 hover:bg-derma-yellow hover:text-derma-purple-deep flex items-center justify-center text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="#social" className="w-9 h-9 rounded-full bg-white/10 hover:bg-derma-yellow hover:text-derma-purple-deep flex items-center justify-center text-white transition-colors" aria-label="Twitter / X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-derma-yellow"/>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-purple-100/85">
              <li>
                <Link to="/" className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>All Treatments</span>
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>Our Doctors</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>Clinical Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>Contact &amp; Location</span>
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-derma-yellow hover:underline transition-colors flex items-center gap-1.5 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-derma-yellow"/>
                  <span>Book Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-derma-pink"/>
              Key Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-purple-100/85">
              {TREATMENTS.slice(0, 5).map((t) => (<li key={t.id}>
                  <Link to={`/treatments/${t.slug}`} className="hover:text-derma-yellow transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-derma-blue"/>
                    <span>{t.title}</span>
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-derma-blue"/>
              Clinic Contact
            </h3>
            <div className="space-y-3 text-sm text-purple-100/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-derma-blue shrink-0 mt-0.5"/>
                <span>452 Wellness Pavilion, Suite 300, Aesthetic Ave, Medical City</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-derma-blue shrink-0"/>
                <span>(800) 555-DERM / (800) 555-3376</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-derma-blue shrink-0"/>
                <span>care@dermacare-clinic.demo</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-derma-yellow shrink-0 mt-0.5"/>
                <div>
                  <p className="font-bold text-white">Mon – Fri: 8:30 AM – 6:30 PM</p>
                  <p className="text-xs text-purple-200">Saturday: 9:00 AM – 4:00 PM | Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: disclaimer & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-purple-200/80 gap-4">
          <p>© {new Date().getFullYear()} DermaCare Dermatology &amp; Aesthetics Clinic. All rights reserved.</p>
          <p className="text-center md:text-right">
            <span className="text-derma-yellow font-bold">Demo Website Notice:</span> For presentation &amp; doctor review purposes only. No actual medical advice or live services provided.
          </p>
        </div>
      </div>
    </footer>);
};
