import React from "react";
import "./DashCard.css";

export const DashCard: React.FC = () => {
    return (
        <article className="dash-card">
            <div className="dash-card__header">
                <div className="dash-card__user-info">
                  {/* bg-purple veya mini-avatar inline kalabilir */}
                  <div className="dash-card__mini-avatar" style={{ background: '#8957e5', color: 'white' }}>AT</div>
                  <span>Ahmet T. <span className="text-muted">talep açtı</span></span>
                </div>
                <span className="dash-card__time">2 saat önce</span>
            </div>
            
            <h3 className="dash-card__title">Ryzen 5 5600X Arıyorum</h3>
            
            <div className="dash-card__tags">
                <span className="tag">İşlemci</span>
                <span className="tag">AM4</span>
            </div>

            {/* .listing-desc düzeltildi */}
            <p className="dash-card__desc">Ryzen 5 5600 arıyorum varsa kutusu ve faturası olursa iyi olur elden alırım. komisyon ödememek için ibana para filan atmam.</p>
            
            <div className="dash-card__footer">
                <div className="dash-card__budget">Bütçe: <span>3.200 ₺</span></div>
                <button className="btn-sm btn-outline">Teklif Ver</button>
            </div>
        </article>
    );
};