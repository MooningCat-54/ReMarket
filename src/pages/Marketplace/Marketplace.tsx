import React, { useEffect, useState } from 'react';
import { DemandCard } from '../../components/Marketplace/DemandCard';
import { Filterbar } from '../../components/Marketplace/Filterbar';
import { Select } from '../../components/ui/Select';
import { FilterModal } from './FilterModal';
import './Marketplace.css';

import { getProducts, type Product } from '../../services/api';


export const Marketplace: React.FC= () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchMarketData = async () => {
        try {
          const data = await getProducts();
          setProducts(data);
        } catch (error) {
          console.error('Market verileri çekilirken hata oluştu:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMarketData();
    }, []);

  const sortOptions = [
    { value: 'newest', label: 'En Yeniler' },
    { value: 'budget', label: 'Bütçesi Yüksek Olanlar' },
    { value: 'urgency', label: 'Aciliyet' }
  ];

  return (
    <div className="marketplace-fluid">
      <div className="bg-glow bg-glow-top-left"></div>
      
      {isFilterModalOpen && (
        <FilterModal onClose={() => setIsFilterModalOpen(false)} />
      )}

      <div className="marketplace-container">
                
        <Filterbar open={() => setIsFilterModalOpen(true)} />

        <main className="feed-area">
          <div className="feed-header">
            <h2 className="feed-header__title">
              Aktif Talepler <span>({products.length} Sonuç)</span>
            </h2>
            
            <Select 
              options={sortOptions} 
              defaultValue="newest"
              aria-label="Sıralama ölçütü"
              style={{ width: '220px' }} 
            />
          </div>

          <div className="demand-list">
            {loading ? (
                  <p>Yükleniyor...</p>
              ) : products.length > 0 ? (
                  products.map((product) => (
                      <DemandCard key={product.id} product={product} />
                  ))
              ) : (
                  <p>Henüz gösterilecek bir ilan bulunmuyor.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};