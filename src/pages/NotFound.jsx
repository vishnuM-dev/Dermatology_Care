import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
export const NotFound = () => {
    return (<div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-derma-kombu-subtle border-2 border-derma-border flex items-center justify-center mx-auto text-derma-kombu font-black text-4xl shadow-soft">
          404
        </div>

        <div>
          <h1 className="text-3xl font-bold text-derma-purple">Page Not Found</h1>
          <p className="mt-2 text-sm text-derma-text-muted leading-relaxed">
            The page you are looking for doesn't exist, was renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-2.5 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark shadow-sm hover:shadow-glow-kombu transition-all">
            <Home className="w-4 h-4 text-derma-yellow"/>
            <span>Return Home</span>
          </Link>
          <Link to="/treatments" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-derma-border text-derma-kombu text-sm font-semibold rounded-full hover:bg-derma-kombu-light/50 transition-all">
            <span>View Treatments</span>
          </Link>
        </div>
      </div>
    </div>);
};
