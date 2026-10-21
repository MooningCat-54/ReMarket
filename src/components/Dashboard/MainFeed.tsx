import React from "react";
import { ActionBox } from "./ActionBox";
import { DashCard } from "./DashCard";
import "./MainFeed.css";

export const MainFeed: React.FC = () => {
    return (
        <main className="main-feed">
            <h1 className="main-feed__welcome">İyi akşamlar, Berat Ese!</h1>
            
            <ActionBox />

            <div className="main-feed__header">
              <h2 className="main-feed__title">İlgini Çekebilecek Talepler</h2>
              <button className="btn-text">Filtrele</button>
            </div>

            <div className="main-feed__list">
                <DashCard />
                <DashCard />
                <DashCard />
                <DashCard />
            </div>
        </main>
    );
};