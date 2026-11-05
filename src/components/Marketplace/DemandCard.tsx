import React from "react";
import { Link } from "react-router-dom";
import "./DemandCard.css";

import type { Product } from "../../services/api";

interface DemandCardProps {
    product: Product;
}

export const DemandCard: React.FC<DemandCardProps> = ({ product }) => {
    return(
        <article className="glass-demand-card">
            <div className="glass-demand-card__top-accent"></div>
            
            <div className="glass-demand-card__layout">
                <div className="glass-demand-card__image-area">
                    <img 
                        src={product.photo_url || "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=200"} 
                        alt={product.title} 
                        className="glass-demand-card__image"
                    />
                </div>

                <div className="glass-demand-card__main">
                    <div className="glass-demand-card__tags">
                        <span className="tag tag--blue">{product.category}</span>
                        <span className="tag badge-outline">Güvenli Ticaret</span>
                    </div>
      
                    <h3 className="glass-demand-card__title">{product.title}</h3>
                    <p className="glass-demand-card__specs">
                        {product.content} 
                    </p>
                </div>

                <div className="glass-demand-card__action-area">
                    <div className="glass-demand-card__budget-info">
                        <span className="glass-demand-card__budget-label">Kullanıcı Bütçesi</span>
                        <span className="glass-demand-card__budget-amount">
                            {product.start_price?.toLocaleString('tr-TR')} ₺ 
                        </span>
                    </div>
                    <Link to={`/auction/${product.id}`}>
                        <button className="btn-glow-success">Teklif Ver</button>
                    </Link>
                    <span className="glass-demand-card__time">Canlı İlan</span>
                </div>

            </div>
        </article>
    );
};