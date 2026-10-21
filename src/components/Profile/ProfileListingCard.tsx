import React from "react";
import "./ProfileListingCard.css";

export const ProfileListingCard: React.FC = () => {
    return(
        <article className="profile-listing-card">
            <div className="card-top-accent"></div>
            <div className="listing-header">
                <span className="label-badge label-cpu">CPU Arıyor</span>
                <span className="time-posted">2 gün önce</span>
            </div>
            <h4>Ryzen 5 5600X Temiz İşlemci</h4>
            <p className="listing-desc">Sadece elden teslim alabilirim, kutu fatura şart değil ama pinler sorunsuz olmalı.</p>
            <div className="listing-footer">
                <div className="price">3.200 ₺</div>
                <button className="btn-xs btn-outline">İncele</button>
            </div>
        </article>
    );
};