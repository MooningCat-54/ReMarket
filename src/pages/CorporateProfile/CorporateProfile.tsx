// CorporateProfile.tsx
import React, { useState } from 'react';
import { ProfileListingCard } from '../../components/Profile/ProfileListingCard';
import { ProfileStatBox } from '../../components/Profile/ProfileStatBox';
import { ProfileTabs } from '../../components/Profile/ProfileTabs';
import { Avatar } from '../../components/ui/Avatar';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import './CorporateProfile.css';

export const CorporateProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vitrin');

  const tabs = [
    { id: 'vitrin', label: 'Vitrin İlanları' },
    { id: 'hakkinda', label: 'Hakkımızda & Politikalar' },
    { id: 'yorumlar', label: 'Değerlendirmeler' }
  ];

  return (
    <main className="corp-profile">
      
      <div 
        className="corp-profile__banner" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)' }}
      ></div>

      <header className="corp-profile__header">
        <div className="corp-profile__avatar-wrapper">
          <Avatar size="lg" fallback="PC" status="online" />
        </div>
        
        <div className="corp-profile__info">
          <h1 className="corp-profile__name">
            PC_Marketim
            <Badge variant="info">Kurumsal Mağaza</Badge>
            <Badge variant="success" dot>✓ Onaylı Satıcı</Badge>
          </h1>
          <p className="corp-profile__meta">
            İstanbul, Kadıköy • 2024'ten beri ReMarket'ta
          </p>
        </div>
        
        <div className="corp-profile__actions">
          <Button variant="outline">Mesaj Gönder</Button>
          <Button variant="primary">Takip Et</Button>
        </div>
      </header>

      <section className="corp-profile__stats">
        <ProfileStatBox label="Satıcı Puanı" value="4.9/5" highlight />
        <ProfileStatBox label="Başarılı İşlem" value="142" />
        <ProfileStatBox label="Aktif İlan" value="24" />
        <ProfileStatBox label="Zamanında Yanıt" value="%98" />
      </section>

      <section className="corp-profile__content">
        <ProfileTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        
        <div className="corp-profile__tab-body">
          {activeTab === 'vitrin' && (
            <div className="corp-profile__grid">
              <ProfileListingCard />
              <ProfileListingCard />
            </div>
          )}
        </div>
      </section>

    </main>
  );
};