// src/components/layout/Navbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logoya tıklayınca şimdilik auth veya home sayfasına gitsin */}
        <div className="navbar__logo" onClick={() => navigate('/auth')}>
          <span>ReMarket</span>
        </div>
        
        <div className="navbar__search">
          <input 
            type="text" 
            placeholder="Ne aramıştınız? (Örn: i5 9.nesil, 16GB DDR4...)" 
            className="navbar__search-input"
          />
          <button className="navbar__search-btn" aria-label="Ara">🔍</button>
        </div>

        <nav className="navbar__actions">
          {/* onNavigate yerine navigate('/url') kullanıyoruz */}
          <button className="navbar__link" onClick={() => navigate('/dashboard')}>Dashboard</button>
          
          {/* Test için direkt bireysel profile yönlendiriyoruz */}
          <button className="navbar__link" onClick={() => navigate('/profile/bireysel')}>Profilim</button>
          
          {/* Piyasayı yeni canlı mezat ekranına bağlayalım */}
          <button className="navbar__link" onClick={() => navigate('/marketplace')}>Piyasa</button>
          
          {/* Yeni form sayfamıza yönlendiriyor */}
          <button className="btn-glow-success" onClick={() => navigate('/create')}>Talep / İlan Oluştur</button>
        </nav>
      </div>
    </header>
  );
};