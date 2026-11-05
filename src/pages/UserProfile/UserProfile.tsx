import React, { useEffect, useState } from 'react';
import { ProfileListingCard } from '../../components/Profile/ProfileListingCard';
import { ProfileStatBox } from '../../components/Profile/ProfileStatBox';
import { ProfileTabs } from '../../components/Profile/ProfileTabs';
import { Avatar } from '../../components/ui/Avatar';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { getProducts, getUserProfile, type Product, type UserProfile as UserProfileType } from '../../services/api';
import './UserProfile.css';

export const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [profile, setProfile] = useState<UserProfileType | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserId = parseInt(localStorage.getItem('user_id') || "");

        const [profileData, productsData] = await Promise.all([
          getUserProfile(storedUserId),
          getProducts()
        ]);

        setProfile(profileData);

        const userProducts = productsData.filter(
          (item) => item.user_id === profileData.id
        );
        setProducts(userProducts);
      } catch (err: any) {
        console.error("Profil verileri çekilirken hata oluştu:", err);
        setError(err.message || 'Profil yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const tabs = [
    { id: 'active', label: 'Aktif İlanları ve Talepleri' },
    { id: 'sold', label: 'Geçmiş İşlemleri (Sattıkları)' }
  ];

  if (loading) return <div className="user-profile__loading">Profil yükleniyor...</div>;
  if (error || !profile) return <div className="user-profile__error">{error || 'Kullanıcı bulunamadı.'}</div>;

  return (
    <main className="user-profile">
      
      <header className="user-profile__header">
        <div className="user-profile__avatar-wrapper">
          <Avatar 
            size="lg" 
            fallback={profile.full_name ? profile.full_name.slice(0, 2).toUpperCase() : 'UNKNOWN'} 
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
        <ProfileStatBox label="Aktif İlan" value={products.length.toString()} />
        <ProfileStatBox label="Mesaj Yanıtlama" value="%100" />
      </section>

      <section className="user-profile__content">
        <ProfileTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        
        <div className="user-profile__tab-body">
          {activeTab === 'active' && (
            <div className="user-profile__grid">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProfileListingCard key={product.id} listing={product} />
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