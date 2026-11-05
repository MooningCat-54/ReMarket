import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // URL'deki parametreyi okumak için
import { AuctionForm } from '../../components/Auction/AuctionForm';
import { BidCard } from '../../components/Auction/BidCard';
import { Badge } from '../../components/ui/Badge';
import { getProducts, type Product } from '../../services/api';
import './LiveAuction.css';

export const LiveAuction: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // URL'den gelen id (örn: /auction/3 ise productId = "3")
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [bids] = useState([
    { id: 1, bidder: "TechMaster99", score: 9.2, price: 4100, message: "Hemen elden alabilirim.", time: "1 dk önce" },
    { id: 2, bidder: "HardwareGuru", score: 8.5, price: 3800, message: "Kargo ile gönderirseniz alırım.", time: "5 dk önce" }
  ]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const found = products.find((p) => p.id === Number(productId));
        if (found) {
          setProduct(found);
        }
      } catch (err) {
        console.error("Ürün yüklenemedi:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

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
          {/* Dinamik Ürün Başlığı */}
          <h1 className="auction-title">{product.title}</h1>
          
          <div className="auction-timer">
            <span className="auction-timer__label">Kalan Süre:</span>
            <span className="auction-timer__value">00:14:59</span>
          </div>

          {/* Dinamik Ürün Açıklaması */}
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