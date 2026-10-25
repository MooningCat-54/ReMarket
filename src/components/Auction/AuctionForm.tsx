import React from "react";
import "./AuctionForm.css";

import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import { Textarea } from '../../components/ui/TextArea';


export const AuctionForm: React.FC = () => {
    return (
        <form className="auction-stream__form" onSubmit={(e) => e.preventDefault()}>
          <div className="auction-stream__form-price">
            <label className="auction-stream__form__label">Teklifiniz (₺)</label>
            <GlassInput type="number" placeholder="Min. 4200 ₺" required />
          </div>
          <div className="auction-stream__form-text-area">
            <label className="auction-stream__form__label">Mesajınız (Opsiyonel)</label>
            <Textarea className="auction-stream__form-text-area__message" placeholder="Örn: Bugün gelip elden test edebilirim." rows={2}/>
          </div>
          <Button variant="primary" className="w-full">Teklif Ver</Button>
        </form>
    );
};
