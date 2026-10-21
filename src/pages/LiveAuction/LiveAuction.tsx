// LiveAuction.tsx
import React, { useState } from 'react';
import { BidCard } from '../../components/Auction/BidCard';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import { Textarea } from '../../components/ui/TextArea';
import './LiveAuction.css';

export const LiveAuction: React.FC = () => {
  const [bids] = useState([
    { id: 1, bidder: "TechMaster99", score: 9.2, price: 4100, message: "Hemen elden alabilirim.", time: "1 dk önce" },
    { id: 2, bidder: "HardwareGuru", score: 8.5, price: 3800, message: "Kargo ile gönderirseniz alırım.", time: "5 dk önce" }
  ]);

  return (
    <main className="auction-page">
      
      <section className="auction-showcase">
        <div 
          className="auction-showcase__image" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80)' }}
        >
          <div className="auction-showcase__status">
            <Badge variant="danger" dot>CANLI MEZAT</Badge>
          </div>
        </div>

        <div className="box-surface auction-showcase__info">
          <h1 className="auction-title">ASUS ROG Strix RTX 3070 Ti 8GB</h1>
          
          <div className="auction-timer">
            <span className="auction-timer__label">Kalan Süre:</span>
            <span className="auction-timer__value">00:14:59</span>
          </div>

          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Kart sadece oyun amaçlı kullanıldı, mining kesinlikle yapılmadı. 
            Kutusu, faturası ve 6 ay garantisi mevcut. FurMark testlerinde max 65 dereceyi görüyor.
          </p>
        </div>
      </section>

      <aside className="auction-stream">
        <header className="auction-stream__header">
          <h2 style={{ fontSize: '1.2rem' }}>Canlı Teklifler</h2>
          <Badge variant="info">2 Teklif</Badge>
        </header>

        <div className="auction-stream__list">
          {bids.map((bid, index) => (
            <BidCard 
              key={bid.id}
              bidderName={bid.bidder}
              reputationScore={bid.score}
              offerPrice={bid.price}
              message={bid.message}
              timeAgo={bid.time}
              isHighest={index === 0}
            />
          ))}
        </div>

        <form className="auction-stream__form" onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Teklifiniz (₺)</label>
            <GlassInput type="number" placeholder="Min. 4200 ₺" required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Mesajınız (Opsiyonel)</label>
            <Textarea placeholder="Örn: Bugün gelip elden test edebilirim." rows={2} style={{ minHeight: '60px' }} />
          </div>
          <Button variant="primary" className="w-full">Teklif Ver</Button>
        </form>
      </aside>

    </main>
  );
};