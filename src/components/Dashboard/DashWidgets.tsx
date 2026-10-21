import React from "react";
import "./DashWidgets.css";

export const DashWidgets: React.FC = () => {
    return(
        <aside className="dash-widgets">
            <div className="box-surface dash-widgets__box--highlight">
                <h3 className="dash-widgets__title">Eski donanımın mı var?</h3>
                <p className="dash-widgets__desc">Hemen sisteme yükle, arayan alıcılarla anında eşleş.</p>
                <button className="btn-glow-success w-full">Yeni Ürün Satışı Aç</button>
            </div>

            <div className="box-surface">
                <div className="dash-widgets__header">
                    <h3 className="dash-widgets__title" style={{marginBottom: 0}}>Gelen Teklifler</h3>
                    <span className="badge">1 Yeni</span>
                </div>
              
                <div className="dash-widgets__notif-list">
                    <div className="dash-widgets__notif-item">
                        <div>
                            <strong>PC_Marketim</strong> senin <span className="text-muted">Lenovo Slimpad 3</span> talebine teklif verdi.
                            <div className="dash-widgets__notif-price">14.500 ₺</div>
                        </div>
                        <button className="btn-xs mt-2" style={{ background: 'var(--color-border)', border: 'none', color: 'white' }}>İncele</button>
                    </div>
                </div>
            </div>

            <div className="box-surface">
                <h3 className="dash-widgets__title">Trend Kategoriler</h3>
                <ul className="dash-widgets__trend-list">
                    <li className="dash-widgets__trend-item">
                      <span className="dash-widgets__trend-rank">1</span> AMD İşlemciler <span className="dash-widgets__trend-up">↑</span>
                    </li>
                    <li className="dash-widgets__trend-item">
                      <span className="dash-widgets__trend-rank">2</span> DDR5 RAM <span className="dash-widgets__trend-up">↑</span>
                    </li>
                    <li className="dash-widgets__trend-item">
                      <span className="dash-widgets__trend-rank">3</span> M.2 SSD <span className="dash-widgets__trend-down">↓</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};