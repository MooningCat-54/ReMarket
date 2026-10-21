// UserProfile.tsx
import React, { useState } from 'react';
import { ProfileListingCard } from '../../components/Profile/ProfileListingCard';
import { ProfileStatBox } from '../../components/Profile/ProfileStatBox';
import { ProfileTabs } from '../../components/Profile/ProfileTabs';
import { Avatar } from '../../components/ui/Avatar';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import './UserProfile.css';

export const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'Aktif İlanları ve Talepleri' },
    { id: 'sold', label: 'Geçmiş İşlemleri (Sattıkları)' }
  ];

  return (
    <main className="user-profile">
      
      <header className="user-profile__header">
        <div className="user-profile__avatar-wrapper">
          <Avatar size="lg" fallback="BE" status="online" />
        </div>
        
        <div className="user-profile__identity">
          <h1 className="user-profile__name">
            Berat Ese
            <Badge variant="neutral">Bireysel Hesap</Badge>
          </h1>
          <p className="user-profile__handle">@beratese · Üyelik: Eylül 2026</p>
          
          <div className="user-profile__badges">
            <Badge variant="success">✓ Telefon Onaylı</Badge>
            <Badge variant="info">🤝 Elden Teslimata Uygun</Badge>
          </div>
        </div>

        <div className="user-profile__actions">
          <Button variant="primary">Mesaj Gönder</Button>
          <Button variant="outline">Şikayet Et / Engelle</Button>
        </div>
      </header>

      <section className="user-profile__stats">
        <ProfileStatBox label="Satıcı Skoru" value="9.8" highlight />
        <ProfileStatBox label="Başarılı İşlem" value="12" />
        <ProfileStatBox label="Aktif İlan" value="3" />
        <ProfileStatBox label="Mesaj Yanıtlama" value="%100" />
      </section>

      <section className="user-profile__content">
        <ProfileTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        
        <div className="user-profile__tab-body">
          {activeTab === 'active' && (
            <div className="user-profile__grid">
              <ProfileListingCard />
              <ProfileListingCard />
            </div>
          )}
        </div>
      </section>

    </main>
  );
};