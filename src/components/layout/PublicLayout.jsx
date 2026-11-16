import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ChevronUp, Phone } from 'lucide-react';
export const PublicLayout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const checkScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (<div className="min-h-screen flex flex-col bg-white text-derma-text relative">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Phone Call Help for mobile/desktop */}
        <a href="tel:+18005553376" title="Direct Clinic Reception" className="w-12 h-12 rounded-full bg-derma-blue text-white flex items-center justify-center shadow-lg hover:bg-derma-blue-dark hover:scale-105 transition-all duration-200" aria-label="Call clinic receptionist">
          <Phone className="w-5 h-5"/>
        </a>

        {/* Scroll to Top */}
        {showScrollTop && (<button onClick={scrollToTop} title="Scroll to top" className="w-11 h-11 rounded-full bg-derma-kombu text-white flex items-center justify-center shadow-md hover:bg-derma-kombu-dark hover:scale-105 transition-all duration-200 animate-in fade-in" aria-label="Scroll back to top">
            <ChevronUp className="w-5 h-5 text-white"/>
          </button>)}
      </div>
    </div>);
};
