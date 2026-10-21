// CreatePost.tsx
import React, { useState } from 'react';
import { ProfileTabs } from '../../components/Profile/ProfileTabs';
import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/TextArea';
import './CreatePost.css';

const CATEGORIES = [
  { value: 'cpu', label: 'İşlemci (CPU)' },
  { value: 'gpu', label: 'Ekran Kartı (GPU)' },
  { value: 'laptop', label: 'Dizüstü Bilgisayar' }
];

export const CreatePost: React.FC = () => {
  const [postType, setPostType] = useState('supply');
  const [category, setCategory] = useState('');

  const postTabs = [
    { id: 'supply', label: 'Satış İlanı Ver' },
    { id: 'demand', label: 'Ürün Arıyorum (Talep Aç)' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`SQLite'a ${postType} tipinde veri kaydediliyor...`);
    //fetch('http://localhost:5000/api/posts', { method: 'POST' ... })
  };

  return (
    <main className="create-post">
      
      <header className="create-post__header">
        <h1 className="create-post__title">İlan / Talep Oluştur</h1>
        <p className="create-post__desc">ReMarket ağına yeni bir donanım ilanı veya talebi bırakın.</p>
      </header>

      <div className="box-surface create-post__form-container">
        
        <ProfileTabs tabs={postTabs} activeTab={postType} onChange={setPostType} />

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="form-group__label">İlan/Talep Başlığı</label>
            <GlassInput 
              placeholder={postType === 'supply' ? "Örn: Temiz Ryzen 5 5600X Kutulu" : "Örn: 9. Nesil i5 H Serisi Laptop Arıyorum"} 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-group__label">Kategori</label>
            <Select 
              options={CATEGORIES} 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              placeholder="Bir kategori seçin..."
              required
            />
          </div>

          {category && (
            <div className="specs-box">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Teknik Detaylar</h3>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-group__label">{category === 'cpu' ? 'Soket Tipi' : 'Minimum Gereksinim'}</label>
                  <GlassInput placeholder="Örn: AM4, 16GB RAM vb." />
                </div>
                <div className="form-group">
                  <label className="form-group__label">Kozmetik Durum</label>
                  <Select 
                    options={[
                      { value: 'new', label: 'Sıfır / Kapalı Kutu' },
                      { value: 'used_good', label: 'İkinci El (Sorunsuz)' },
                      { value: 'used_fair', label: 'İkinci El (Kusurlu/Kozmetik Çizik)' }
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label className="form-group__label">
                {postType === 'supply' ? 'Satış Fiyatı (₺)' : 'Maksimum Bütçe (₺)'}
              </label>
              <GlassInput type="number" placeholder="0.00" required />
            </div>

            <div className="form-group">
              <label className="form-group__label">
                {postType === 'supply' ? 'Stok / Adet' : 'Teslimat Aciliyeti'}
              </label>
              {postType === 'supply' ? (
                <GlassInput type="number" defaultValue="1" min="1" />
              ) : (
                <Select 
                  options={[
                    { value: 'normal', label: 'Normal (1-2 Hafta)' },
                    { value: 'urgent', label: 'Acil (1-3 Gün)' }
                  ]}
                />
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-group__label">Detaylı Açıklama</label>
            <Textarea 
              placeholder={postType === 'supply' ? "Ürünün kutusu, faturası, kullanım geçmişi vb. detayları yazın." : "Kabul etmeyeceğiniz kusurları, teslimat şartlarınızı (elden test vb.) belirtin."}
              required
            />
          </div>

          <Button variant="primary" size="lg" className="w-full mt-4" type="submit">
            {postType === 'supply' ? 'İlanı Yayınla' : 'Talebi Piyasaya Bırak'}
          </Button>

        </form>
      </div>

    </main>
  );
};