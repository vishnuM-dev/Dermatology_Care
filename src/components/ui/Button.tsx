import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'golden' | 'kombu' | 'outline-kombu' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-derma-kombu/40 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs md:text-sm px-4 py-2 rounded-full gap-1.5',
    md: 'text-sm md:text-base px-6 py-3 rounded-full gap-2',
    lg: 'text-base md:text-lg px-7 py-3.5 rounded-full gap-2.5',
  };

  const variantStyles = {
    // Kombu Green Button - Rich organic clinical CTA with white text
    kombu: 'bg-derma-kombu text-white hover:bg-derma-kombu-dark shadow-sm hover:shadow-glow-kombu active:scale-[0.99]',
    // Outline Kombu Green Button
    'outline-kombu': 'bg-white border-2 border-derma-kombu text-derma-kombu hover:bg-derma-kombu hover:text-white shadow-sm active:scale-[0.99]',
    // Primary Purple Button
    primary: 'bg-derma-purple text-white hover:bg-derma-purple-dark shadow-sm hover:shadow-md active:scale-[0.99]',
    // Secondary White/Purple outline Button
    secondary: 'bg-white border-2 border-derma-purple text-derma-purple hover:bg-derma-kombu-light/60 shadow-sm active:scale-[0.99]',
    // Happy Yellow Accent CTA Button with Dark Purple Text
    golden: 'bg-derma-yellow text-derma-purple-deep font-bold hover:bg-derma-yellow-hover shadow-sm hover:shadow-glow-yellow active:scale-[0.99]',
    // White outline for dark banners
    'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white/10 active:scale-[0.99]',
    // Ghost
    ghost: 'bg-transparent text-derma-kombu hover:bg-derma-kombu-light/50',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${classes}`} {...props}>
      {content}
    </button>
  );
};
