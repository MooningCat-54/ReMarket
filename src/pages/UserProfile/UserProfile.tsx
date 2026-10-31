// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { ProfileListingCard } from '../../components/Profile/ProfileListingCard';
import { ProfileStatBox } from '../../components/Profile/ProfileStatBox';
import { ProfileTabs } from '../../components/Profile/ProfileTabs';
import { Avatar } from '../../components/ui/Avatar';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import './UserProfile.css';

export const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [profile, setProfile] = useState<any>(null);
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:8000/api/profiles').then(res => res.json()),
      fetch('http://127.0.0.1:8000/api/listings').then(res => res.json())
    ])
      .then(([profilesData, listingsData]) => {
        if (profilesData && profilesData.length > 0) {
          const currentProfile = profilesData[1];
          setProfile(currentProfile);

          const userListings = listingsData.filter(
            (item: any) => item.user_id === currentProfile.id
          );
          setListings(userListings);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Veri çekme hatası:", err);
        setLoading(false);
      });
  }, []);

  const tabs = [
    { id: 'active', label: 'Aktif İlanları ve Talepleri' },
    { id: 'sold', label: 'Geçmiş İşlemleri (Sattıkları)' }
  ];

  if (loading) return <div className="user-profile__loading">Profil yükleniyor...</div>;
  if (!profile) return <div className="user-profile__error">Kullanıcı bulunamadı.</div>;

  return (
    <main className="user-profile">
      
      <header className="user-profile__header">
        <div className="user-profile__avatar-wrapper">
          <Avatar 
            size="lg" 
            fallback={profile.full_name ? profile.full_name.slice(0, 2).toUpperCase() : 'UNKOWN'} 
            status="online" 
          />
        </div>
        
        <div className="user-profile__identity">
          <h1 className="user-profile__name">
            {profile.full_name}
            <Badge variant="neutral">
              {profile.is_corporate ? 'Kurumsal Hesap' : 'Bireysel Hesap'}
            </Badge>
          </h1>
          <p className="user-profile__handle">
            @{profile.username} · {profile.bio || 'ReMarket Kullanıcısı'}
          </p>
          
          <div className="user-profile__badges">
            <Badge variant="success">✓ Telefon Onaylı</Badge>
            <Badge variant="info">Elden Teslimata Uygun</Badge>
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
        <ProfileStatBox label="Aktif İlan" value={listings.length.toString()} />
        <ProfileStatBox label="Mesaj Yanıtlama" value="%100" />
      </section>

      <section className="user-profile__content">
        <ProfileTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        
        <div className="user-profile__user-profile__tab-body">
          {activeTab === 'active' && (
            <div className="user-profile__grid">
              {listings.length > 0 ? (
                listings.map((listing) => (
                  <ProfileListingCard key={listing.id} listing={listing} />
                ))
              ) : (
                <p className="user-profile__empty">Bu kullanıcıya ait aktif ilan bulunmuyor.</p>
              )}
            </div>
          )}
        </div>
      </section>

    </main>
  );
};