// MainFeed.tsx
import React from "react";
import type { Product } from "../../services/api";
import { ActionBox } from "./ActionBox";
import { DashCard } from "./DashCard";
import "./MainFeed.css";

interface MainFeedProps {
  products: Product[];
  loading: boolean;
}

export const MainFeed: React.FC<MainFeedProps> = ({ products, loading }) => {
    const userName = localStorage.getItem('user_name') || 'Kullanıcı';

    return (
        <main className="main-feed">
            <h1 className="main-feed__welcome">Hoş geldin, {userName}!</h1>
            
            <ActionBox />

            <div className="main-feed__header">
              <h2 className="main-feed__title">
                İlgini Çekebilecek İlanlar <span>({products.length})</span>
              </h2>
              <button className="btn-text">Filtrele</button>
            </div>

            <div className="main-feed__list">
                {loading ? (
                    <p>Yükleniyor...</p>
                ) : products.length > 0 ? (
                    products.map((product) => (
                        <DashCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>Henüz gösterilecek bir ilan bulunmuyor.</p>
                )}
            </div>
        </main>
    );
};