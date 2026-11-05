import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../services/api";
import "./DashCard.css";

interface DashCardProps {
    product: Product;
}

export const DashCard: React.FC<DashCardProps> = ({ product }) => {
    return (
        <article className="dash-card">
            <div className="dash-card__header">
                <div className="dash-card__user-info">
                  <div className="dash-card__mini-avatar" style={{ background: '#8957e5', color: 'white' }}>
                    U{product.user_id}
                  </div>
                  <span>Kullanıcı #{product.user_id} <span className="text-muted">ilan açtı</span></span>
                </div>
                <span className="dash-card__time">Canlı İlan</span>
            </div>
            
            <h3 className="dash-card__title">{product.title}</h3>
            
            <div className="dash-card__tags">
                <span className="tag">{product.category}</span>
                <span className="tag">Güvenli Ticaret</span>
            </div>

            <p className="dash-card__desc">{product.content}</p>
            
            <div className="dash-card__footer">
                <div className="dash-card__budget">
                    Fiyat: <span>{product.start_price?.toLocaleString('tr-TR')} ₺</span>
                </div>
                <Link to={`/auction/${product.id}`}>
                        <button className="btn-sm btn-outline">Teklif Ver</button>
                </Link>
            </div>
        </article>
    );
};