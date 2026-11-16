import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Menu, X, ChevronDown, Sparkles, PhoneCall } from 'lucide-react';
import { TREATMENTS } from '../../data/treatments';
export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setTreatmentsDropdown(false);
    }, [location.pathname]);
    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Treatments', path: '/treatments', hasDropdown: true },
        { label: 'Our Doctors', path: '/doctors' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Contact', path: '/contact' },
    ];
    const isActive = (path) => {
        if (path === '/')
            return location.pathname === '/';
        return location.pathname.startsWith(path);
    };
    return (<header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-derma-border' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            {/* Custom SVG Logo in new theme colors */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg viewBox="0 0 44 44" fill="none" className="w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                <path d="M22 4C22 4 8 18 8 28C8 35.732 14.268 42 22 42C29.732 42 36 35.732 36 28C36 18 22 4 22 4Z" fill="#E885CF" fillOpacity="0.4"/>
                <path d="M15 14C15 14 10 22 10 28C10 34.6274 15.3726 40 22 40C28.6274 40 34 34.6274 34 28C34 24.5 32 20 28 17C23 27 18 31 15 14Z" fill="#7F27A8"/>
                <path d="M18 10C18 10 26 18 28 27C29.5 34 24 38 24 38C29 36.5 33 32 33 27C33 18.5 22 11.5 18 10Z" fill="#FFD400"/>
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-2xl font-bold tracking-tight text-derma-purple">
                  Derma
                </span>
                <span className="text-2xl font-bold tracking-tight text-derma-yellow">
                  Care
                </span>
              </div>
              <span className="text-[11px] font-semibold tracking-wider text-derma-magenta uppercase -mt-1">
                Dermatology &amp; Aesthetics
              </span>
            </div>
          </Link>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3">
            {navLinks.map((link) => {
            const active = isActive(link.path);
            if (link.hasDropdown) {
                return (<div key={link.label} className="relative" onMouseEnter={() => setTreatmentsDropdown(true)} onMouseLeave={() => setTreatmentsDropdown(false)}>
                    <Link to={link.path} className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${active
                        ? 'bg-derma-yellow text-derma-purple-deep font-bold shadow-xs'
                        : 'text-derma-purple hover:text-derma-kombu hover:bg-derma-kombu-light/50'}`}>
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-derma-purple transition-transform duration-200 ${treatmentsDropdown ? 'rotate-180' : ''}`}/>
                    </Link>

                    {/* Treatments Dropdown Menu */}
                    {treatmentsDropdown && (<div className="absolute top-full left-0 w-72 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-soft-lg border border-derma-border py-3 px-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-derma-kombu">
                            Core Treatments
                          </div>
                          {TREATMENTS.slice(0, 4).map((t) => (<Link key={t.id} to={`/treatments/${t.slug}`} className="flex items-center justify-between px-3 py-2.5 text-sm rounded-xl text-derma-purple hover:bg-derma-kombu-light/50 hover:text-derma-kombu transition-colors">
                              <span className="font-semibold">{t.title}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-derma-kombu-light text-derma-kombu font-medium">
                                {t.categoryLabel}
                              </span>
                            </Link>))}
                          <div className="border-t border-derma-border mt-2 pt-2">
                            <Link to="/treatments" className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-bold text-derma-kombu hover:bg-derma-kombu-light/50 rounded-lg transition-colors">
                              <Sparkles className="w-3.5 h-3.5 text-derma-yellow"/>
                              View All Treatments
                            </Link>
                          </div>
                        </div>
                      </div>)}
                  </div>);
            }
            return (<Link key={link.label} to={link.path} className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${active
                    ? 'bg-derma-yellow text-derma-purple-deep font-bold shadow-xs'
                    : 'text-derma-purple hover:text-derma-kombu hover:bg-derma-kombu-light/50'}`}>
                  {link.label}
                </Link>);
        })}
          </nav>

          {/* Right Action: Book Appointment Button (Desktop in Kombu Green) */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => navigate('/appointment')} className="inline-flex items-center gap-2 px-6 py-2.5 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark shadow-sm hover:shadow-glow-kombu transition-all duration-200 active:scale-[0.98] group">
              <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200"/>
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={() => navigate('/appointment')} className="px-3.5 py-1.5 bg-derma-kombu text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-white"/>
              <span>Book</span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-derma-purple hover:bg-derma-kombu-light/50 rounded-xl focus:outline-none" aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (<div className="lg:hidden bg-white border-t border-derma-border px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
                const active = isActive(link.path);
                return (<Link key={link.label} to={link.path} className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${active
                        ? 'bg-derma-yellow text-derma-purple-deep font-bold'
                        : 'text-derma-purple hover:bg-derma-kombu-light/50 hover:text-derma-kombu'}`}>
                  {link.label}
                </Link>);
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-derma-border flex flex-col gap-3">
            <button onClick={() => navigate('/appointment')} className="w-full flex items-center justify-center gap-2 py-3 bg-derma-kombu text-white font-semibold rounded-2xl shadow-sm hover:bg-derma-kombu-dark">
              <Calendar className="w-5 h-5 text-white"/>
              <span>Book an Appointment</span>
            </button>
            <a href="tel:+18005553376" className="w-full flex items-center justify-center gap-2 py-2.5 bg-derma-kombu-light text-derma-kombu text-sm font-semibold rounded-2xl">
              <PhoneCall className="w-4 h-4 text-derma-kombu"/>
              <span>Call Clinic: (800) 555-DERM</span>
            </a>
          </div>
        </div>)}
    </header>);
};
