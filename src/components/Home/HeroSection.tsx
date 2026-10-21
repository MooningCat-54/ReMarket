import React from "react";
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-fluid">
        <div className="hero-fluid__content">
            <h1 className="hero-fluid__title">İkinci el donanımda <br/> geleceğin ticaret modeli.</h1>
            <p className="hero-fluid__subtitle">
                İlanlar arasında kaybolma devri bitti. ReMarket ile aradığın donanımın özelliklerini belirle, piyasadaki satıcılar doğrudan sana ulaşsın.
            </p>
            <div className="hero-fluid__actions">
                <button className="hero-fluid__btn-primary">Hemen Başla</button>
                <button className="hero-fluid__btn-secondary">Daha Fazla Bilgi</button>
            </div>
        </div>
        <div className="hero-fluid__glow" aria-hidden="true"></div>
    </section>
  );
};