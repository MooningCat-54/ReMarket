// src/pages/Marketplace/FilterModal.tsx
import React from 'react';
import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import './FilterModal.css';

interface FilterModalProps {
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="glass-modal">
        <header className="modal-header">
          <h2 className="modal-header__title">Filtreleri Düzenle</h2>
          <button className="btn-close" onClick={onClose} aria-label="Kapat">✕</button>
        </header>

        <div className="modal-body drill-down-container">
          
          <div className="drill-column column-active">
            <h3 className="column-title">Ana Donanım Tipi</h3>
            <ul className="drill-list">
              <li className="drill-item selected">
                İşlemci (CPU) <span className="drill-item__arrow">→</span>
              </li>
              <li className="drill-item">
                Ekran Kartı (GPU) <span className="drill-item__arrow">→</span>
              </li>
              <li className="drill-item">
                Anakart <span className="drill-item__arrow">→</span>
              </li>
              <li className="drill-item">
                Bellek (RAM) <span className="drill-item__arrow">→</span>
              </li>
            </ul>
          </div>

          <div className="drill-column column-next">
            <div className="column-header-back">
              <button className="btn-back">← Geri</button>
              <h3 className="column-title">İşlemci (CPU) Detayları</h3>
            </div>
            
            <div className="filter-group-internal">
              <label className="filter-group__label">Marka</label>
              <div className="pill-group">
                <button className="pill active">AMD</button>
                <button className="pill">Intel</button>
              </div>
            </div>

            <div className="filter-group-internal">
              <label className="filter-group__label">Soket Tipi Arayın</label>
              <GlassInput 
                placeholder="Örn: AM4, LGA1700..." 
                className="btn-sm" 
              />
              <div className="pill-group mt-2">
                <button className="pill active">AM4</button>
                <button className="pill">AM5</button>
                <button className="pill outline">+ 12 Diğer</button>
              </div>
            </div>

          </div>
        </div>

        <footer className="modal-footer">
          <Button variant="ghost">Temizle</Button>
          <Button variant="primary" onClick={onClose}>Filtreleri Uygula</Button>
        </footer>
      </div>
    </div>
  );
};