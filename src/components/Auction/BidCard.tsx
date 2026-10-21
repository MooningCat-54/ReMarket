// BidCard.tsx
import React from 'react';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import './BidCard.css';

interface BidProps {
  bidderName: string;
  reputationScore: number;
  offerPrice: number;
  message: string;
  timeAgo: string;
  isHighest?: boolean; // En yüksek teklif mi?
}

export const BidCard: React.FC<BidProps> = ({ bidderName, reputationScore, offerPrice, message, timeAgo, isHighest }) => {
  return (
    <article className="bid-card">
      <header className="bid-card__header">
        <div className="bid-card__user-info">
          {/* Kendi Avatar legomuzu kullanıyoruz */}
          <Avatar size="md" fallback={bidderName.substring(0, 2)} status="online" />
          <div>
            <h3 className="bid-card__name">
              {bidderName}
              {/* Kendi Badge legomuzu kullanıyoruz */}
              <Badge variant={reputationScore >= 9 ? 'success' : 'warning'}>
                ★ {reputationScore}
              </Badge>
            </h3>
          </div>
        </div>
        
        <div className="bid-card__price">
          <div className="bid-card__price-label">{isHighest ? 'En Yüksek Teklif' : 'Teklif'}</div>
          <div className="bid-card__price-value">{offerPrice.toLocaleString('tr-TR')} ₺</div>
        </div>
      </header>
      
      <p className="bid-card__message">"{message}"</p>

      <footer className="bid-card__footer">
        <time className="bid-card__time">{timeAgo}</time>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="outline" size="sm">Profili Gör</Button>
          {isHighest && <Button variant="primary" size="sm">Kabul Et</Button>}
        </div>
      </footer>
    </article>
  );
};