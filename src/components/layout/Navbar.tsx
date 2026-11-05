// src/components/layout/Navbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => navigate('/')}>
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
          <button className="navbar__link" onClick={() => navigate('/dashboard')}>Dashboard</button>
          
          <button className="navbar__link" onClick={() => navigate('/profile/bireysel')}>Profilim</button>
          
          <button className="navbar__link" onClick={() => navigate('/marketplace')}>Piyasa</button>
          
          <button className="btn-glow-success" onClick={() => navigate('/create')}>Talep / İlan Oluştur</button>
        </nav>
      </div>
    </header>
  );
};