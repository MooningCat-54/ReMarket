import React from "react";
import "./FeatureSection.css";

export const FeatureSection: React.FC = () => {
  return (
    <section className="feature-section">
        <div className="feature-section__grid">
            <div className="feature-section__text">
                <h2 className="feature-section__title">Sen ne aradığını bil,<br/>biz satıcıyı bulalım.</h2>
                <p className="feature-section__desc">
                    9. nesil i5 işlemcili, çiziksiz kasaya sahip spesifik bir laptop mu arıyorsun? 
                    Arama çubuklarında saatlerce filtreleme yapmak yerine talebini yayınla. 
                    Sisteme kayıtlı satıcılar kriterlerine uygun cihazlarla sana teklif versin.
                </p>
                <button className="btn-text-link">
                    Nasıl çalışır? <span>→</span>
                </button>
            </div>
            
            <div className="feature-section__visual">
                <div className="feature-section__glass-card">
                    <div className="feature-section__glass-header">
                        <span className="feature-section__dot feature-section__dot--danger"></span>
                        <span className="feature-section__dot feature-section__dot--warning"></span>
                        <span className="feature-section__dot feature-section__dot--success"></span>
                    </div>
                    <div className="feature-section__glass-body">
                        <div className="feature-section__skeleton-line" style={{ width: '75%' }}></div>
                        <div className="feature-section__skeleton-line w-full"></div>
                        <div className="feature-section__skeleton-line" style={{ width: '50%' }}></div>
                        <div className="feature-section__budget-tag">Gelen Teklif: 15.000 ₺</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};