import React from "react";
import "./Filterbar.css";

interface FilterbarProps {
    open: () => void;
}

export const Filterbar: React.FC<FilterbarProps> = ({ open }) => {
    return(
        <aside className="sidebar-glass">
            <button 
                className="btn-glow-success w-full"
                style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                onClick={open}
            >
                <span>⚙️</span> Filtreleri Düzenle
            </button>

            <div className="sidebar-glass__filters">
                <h3 className="sidebar-glass__title">Şu an filtrelenenler:</h3>
            
                <div className="sidebar-glass__tag-group">
                    <span className="sidebar-glass__active-tag">
                        İşlemci (CPU) <button className="sidebar-glass__tag-remove" aria-label="Kaldır">✕</button>
                    </span>
                    <span className="sidebar-glass__active-tag">
                        AMD <button className="sidebar-glass__tag-remove" aria-label="Kaldır">✕</button>
                    </span>
                    <span className="sidebar-glass__active-tag">
                        Soket: AM4 <button className="sidebar-glass__tag-remove" aria-label="Kaldır">✕</button>
                    </span>
                    <span className="sidebar-glass__active-tag">
                        Fiyat: 1000₺ - 5000₺ <button className="sidebar-glass__tag-remove" aria-label="Kaldır">✕</button>
                    </span>
                </div>
            
                <button className="btn-text-link text-sm mt-2">Tümünü Temizle</button>
            </div>
        </aside>
    );
};