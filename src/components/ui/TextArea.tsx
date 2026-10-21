import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
}

export const Textarea: React.FC<TextareaProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className="relative flex items-start">
      {icon && <span className="absolute left-3 top-3 text-[var(--color-text-muted)] pointer-events-none">{icon}</span>}
      <textarea 
        className={`input-base ${className}`} 
        style={{ width: '100%', minHeight: '120px', paddingLeft: icon ? '2.5rem' : '1rem', resize: 'vertical' }}
        {...props}
      />
    </div>
  );
};