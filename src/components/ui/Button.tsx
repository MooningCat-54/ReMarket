import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  leftIcon, 
  rightIcon, 
  className = '',
  ...props 
}) => {
  
  // React prop'larını Global CSS sınıflarına çeviren merkez
  const getVariantClass = () => {
    switch(variant) {
      case 'primary': return 'btn-glow-success'; 
      case 'secondary': return 'btn-hero-secondary'; 
      case 'outline': return 'btn-outline';
      case 'ghost': return 'btn-text';
      default: return 'btn-glow-success';
    }
  };

  const getSizeClass = () => {
    switch(size) {
      case 'sm': return 'btn-sm';
      case 'md': return ''; // Global CSS'teki standart padding
      case 'lg': return 'btn-lg'; // Gerekirse global.css'e eklenebilir
      default: return '';
    }
  };

  return (
    <button 
      className={`${getVariantClass()} ${getSizeClass()} ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};