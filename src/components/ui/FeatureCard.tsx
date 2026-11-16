import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div
      className={`group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-derma-border shadow-soft hover:shadow-soft-lg hover:-translate-y-1 hover:border-derma-pink/50 transition-all duration-300 ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-derma-kombu-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-base font-bold text-derma-kombu group-hover:text-derma-purple transition-colors duration-200">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-xs md:text-sm text-derma-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
