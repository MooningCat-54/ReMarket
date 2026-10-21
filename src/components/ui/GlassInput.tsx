import React from 'react';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const GlassInput: React.FC<GlassInputProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className={`relative flex items-center ${className}`} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {icon && (
        <span style={{ position: 'absolute', left: '12px', color: 'var(--color-text-muted)' }}>
          {icon}
        </span>
      )}
      <input 
        className={`input-base ${className}`}
        style={{ width: '100%', paddingLeft: icon ? '2.5rem' : '1rem' }}
        {...props}
      />
    </div>
  );
};