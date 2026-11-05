import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuctionForm } from '../../components/Auction/AuctionForm';
import { BidCard } from '../../components/Auction/BidCard';
import { Badge } from '../../components/ui/Badge';
import { getBids, getProducts, type Bid, type Product } from '../../services/api';
import './LiveAuction.css';

export const LiveAuction: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);

  const numericProductId = Number(productId);

  const fetchAuctionData = useCallback(async () => {
    if (!numericProductId) return;
    try {
      const [productsData, bidsData] = await Promise.all([
        getProducts(),
        getBids(numericProductId)
      ]);

      const foundProduct = productsData.find((p) => p.id === numericProductId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setBids(bidsData);
    } catch (err) {
      console.error("Mezat verileri yüklenemedi:", err);
    } finally {
      setLoading(false);
    }
  }, [numericProductId]);

  useEffect(() => {
    fetchAuctionData();
  }, [fetchAuctionData]);

  if (loading) return <div style={{ color: 'white', padding: '20px' }}>Yükleniyor...</div>;
  if (!product) return <div style={{ color: 'white', padding: '20px' }}>Ürün bulunamadı.</div>;

  return (
    <main className="auction-page">
      <section className="auction-showcase">
        <div 
          className="auction-showcase__image" 
          style={{ backgroundImage: `url(${product.photo_url || 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'})` }}
        >
          <div className="auction-showcase__status">
            <Badge variant="danger" dot>CANLI MEZAT</Badge>
          </div>
        </div>

        <div className="box-surface auction-showcase__info">
          <h1 className="auction-title">{product.title}</h1>
          
          <div className="auction-timer">
            <span className="auction-timer__label">Kalan Süre:</span>
            <span className="auction-timer__value">00:14:59</span>
          </div>

          <p className="auction-showcase__text-area">
            {product.content}
          </p>
        </div>
      </section>

      <aside className="auction-stream">
        <header className="auction-stream__header">
          <h2 className="auction-stream__header-text">Canlı Teklifler</h2>
          <Badge variant="info">{bids.length} Teklif</Badge>
        </header>

        <div className="auction-stream__list">
          {bids.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>Henüz teklif verilmemiş. İlk teklifi sen ver!</p>
          ) : (
            bids.map((bid, index) => (
              <BidCard 
                key={bid.id}
                bidderName={`Kullanıcı #${bid.user_id}`} // İleride kullanıcı adı join ile eklenebilir
                reputationScore={9.0} // Şimdilik standart puan
                offerPrice={bid.amount}
                message={bid.message || ""}
                timeAgo={new Date(bid.created_at).toLocaleTimeString()}
                isHighest={index === 0}
              />
            ))
          )}
        </div>

        <AuctionForm productId={numericProductId} onBidCreated={fetchAuctionData} />
      </aside>
    </main>
  );
};