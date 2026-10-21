import React from 'react';
import './ProfileStatBox.css';

interface ProfileStatBoxProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export const ProfileStatBox: React.FC<ProfileStatBoxProps> = ({ label, value, highlight = false }) => {
  return (
    <div className="profile-stat-box">
      <div className={`profile-stat-box__value ${highlight ? 'profile-stat-box__value--highlight' : ''}`}>
        {value}
      </div>
      <div className="profile-stat-box__label">
        {label}
      </div>
    </div>
  );
};