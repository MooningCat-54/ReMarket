import React, { useState } from 'react';
import { DemandCard } from '../../components/Marketplace/DemandCard';
import { Filterbar } from '../../components/Marketplace/Filterbar';
import { Select } from '../../components/ui/Select';
import { FilterModal } from './FilterModal';
import './Marketplace.css';

export const Marketplace: React.FC = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

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
            <h2 className="feed-header__title">Aktif Talepler <span>(14 Sonuç)</span></h2>
            
            <Select 
              options={sortOptions} 
              defaultValue="newest"
              aria-label="Sıralama ölçütü"
              style={{ width: '220px' }} 
            />
          </div>

          <div className="demand-list">
            <DemandCard />
            <DemandCard />
            <DemandCard />
          </div>
        </main>
      </div>
    </div>
  );
};