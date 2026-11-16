import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowColor?: 'magenta' | 'purple' | 'blue';
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  showUnderline?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowColor = 'magenta',
  title,
  highlightText,
  description,
  align = 'center',
  className = '',
  showUnderline = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const eyebrowColorClass = {
    magenta: 'text-derma-magenta',
    purple: 'text-derma-purple',
    blue: 'text-derma-blue',
  }[eyebrowColor];

  const renderTitle = () => {
    if (!highlightText) {
      return title;
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="text-derma-orange">{highlightText}</span>
        {parts[1] || ''}
      </>
    );
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <span className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2 ${eyebrowColorClass}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-derma-purple tracking-tight leading-snug">
        {renderTitle()}
      </h2>
      {showUnderline && (
        <div className="w-16 h-1.5 bg-derma-yellow rounded-full mt-3 mb-2" />
      )}
      {description && (
        <p className="mt-3 text-sm md:text-base text-derma-text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
