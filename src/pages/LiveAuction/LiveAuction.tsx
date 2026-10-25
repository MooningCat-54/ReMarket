import React, { useState } from 'react';
import { AuctionForm } from '../../components/Auction/AuctionForm';
import { BidCard } from '../../components/Auction/BidCard';
import { Badge } from '../../components/ui/Badge';
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

          <p className="auction-showcase__text-area">
            Kart sadece oyun amaçlı kullanıldı, mining kesinlikle yapılmadı. 
            Kutusu, faturası ve 6 ay garantisi mevcut. FurMark testlerinde max 65 dereceyi görüyor.
          </p>
        </div>
      </section>

      <aside className="auction-stream">
        <header className="auction-stream__header">
          <h2 className="auction-stream__header-text">Canlı Teklifler</h2>
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

        <AuctionForm />

      </aside>

    </main>
  );
};