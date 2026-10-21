import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  dot?: boolean; 
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', dot = false }) => {
  
  // Global CSS'teki .tag ve modifier sınıfları
  const getVariantClass = () => {
    switch(variant) {
      case 'info': return 'tag tag--blue';
      case 'neutral': return 'tag badge-outline';
      case 'success': return 'tag'; 
      case 'warning': return 'tag';
      case 'danger': return 'tag';
      default: return 'tag';
    }
  };

  return (
    <span className={getVariantClass()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
      {dot && (
        <span 
          style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }}
        ></span>
      )}
      {children}
    </span>
  );
};