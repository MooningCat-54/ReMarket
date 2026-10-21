import React from "react";
import "./ActionBox.css";

export const ActionBox: React.FC = () => {
    return (
        <div className="box-surface action-box">
            <input 
                type="text" 
                placeholder="Ne aradığınızı yazın veya eylem seçin..." 
                className="action-box__input"
            />
            <div className="action-box__actions">
                <button className="btn-outline btn-sm">Talep Aç</button>
                <button className="btn-outline btn-sm">Ürün Sat</button>
                <button className="btn-outline btn-sm">Kategori</button>
            </div>
        </div>
    );
};