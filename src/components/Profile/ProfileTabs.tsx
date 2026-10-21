import React from 'react';
import './ProfileTabs.css';

interface TabItem {
  id: string;
  label: string;
}

interface ProfileTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="profile-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`profile-tabs__btn ${activeTab === tab.id ? 'profile-tabs__btn--active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};