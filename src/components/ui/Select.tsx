import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  icon?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ options, placeholder, icon, className = '', ...props }) => {
  return (
    <div className="relative flex items-center">
      {icon && <span className="absolute left-3 text-[var(--color-text-muted)] pointer-events-none">{icon}</span>}
      <select 
        className={`input-base ${className}`} 
        style={{ width: '100%', paddingLeft: icon ? '2.5rem' : '1rem', appearance: 'none' }}
        {...props}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="absolute right-3 text-[var(--color-text-muted)] pointer-events-none">▼</span>
    </div>
  );
};