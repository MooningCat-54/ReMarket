import React from "react";
import "./DemandCard.css";

export const DemandCard: React.FC = () => {
    return(
        <article className="glass-demand-card">
            <div className="glass-demand-card__top-accent"></div>
            
            <div className="glass-demand-card__layout">
                <div className="glass-demand-card__image-area">
                    <img 
                        src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=200" 
                        alt="Referans Ürün" 
                        className="glass-demand-card__image"
                    />
                </div>

                <div className="glass-demand-card__main">
                    <div className="glass-demand-card__tags">
                        <span className="tag tag--blue">CPU</span>
                        <span className="tag badge-outline">AMD</span>
                        <span className="tag badge-outline">Soket AM4</span>
                    </div>
      
                    <h3 className="glass-demand-card__title">Ryzen 7 5800X3D İşlemci Aranıyor</h3>
                    <p className="glass-demand-card__specs">
                        Pinlerinde yamulma olmayan, kutulu ve faturalı bir 5800X3D arıyorum. 
                        Sadece elden test ederek alabilirim.
                    </p>
                </div>

                <div className="glass-demand-card__action-area">
                    <div className="glass-demand-card__budget-info">
                        <span className="glass-demand-card__budget-label">Kullanıcı Bütçesi</span>
                        <span className="glass-demand-card__budget-amount">9.500 ₺</span>
                    </div>
                    <button className="btn-glow-success">Teklif Ver</button>
                    <span className="glass-demand-card__time">10 dakika önce</span>
                </div>

            </div>
        </article>
    );
};