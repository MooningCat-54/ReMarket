import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string; 
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'busy';
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, size = 'md', status }) => {
  const sizeMap = { sm: '24px', md: '48px', lg: '64px' };
  const currentSize = sizeMap[size];

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: currentSize, height: currentSize }}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--color-border)' }} 
        />
      ) : (
        <div className="avatar-circle" style={{ width: '100%', height: '100%', fontSize: size === 'sm' ? '0.7rem' : '1.2rem' }}>
          {fallback || alt?.substring(0, 2).toUpperCase() || '?'}
        </div>
      )}
      
      {status && (
        <span 
          style={{
            position: 'absolute', bottom: 0, right: 0, width: '25%', height: '25%', 
            borderRadius: '50%', border: '2px solid var(--color-bg)',
            backgroundColor: status === 'online' ? 'var(--color-success)' : status === 'busy' ? '#d29922' : 'var(--color-text-muted)'
          }}
        ></span>
      )}
    </div>
  );
};