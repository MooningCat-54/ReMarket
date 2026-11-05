import React, { useState } from "react";
import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import { Textarea } from '../../components/ui/TextArea';
import { createBid } from "../../services/api";
import "./AuctionForm.css";

interface AuctionFormProps {
  productId: number;
  onBidCreated: () => void;
}

export const AuctionForm: React.FC<AuctionFormProps> = ({ productId, onBidCreated }) => {
  const [amount, setAmount] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Kullanıcı ID'sini şimdilik localStorage'dan veya giriş yapmış kullanıcı state'inden aldığımızı varsayalım
    // Örn: const userStr = localStorage.getItem("user");
    const storedUserId = localStorage.getItem("user_id"); // Şimdilik test için sabit veya auth durumuna bağlı alabiliriz

    if (!amount || Number(amount) <= 0) {
      setError("Geçerli bir teklif tutarı giriniz.");
      return;
    }

    try {
      setLoading(true);
      await createBid({
        product_id: productId,
        user_id: Number(storedUserId),
        amount: Number(amount),
        message: message.trim() ? message : undefined,
      });

      setAmount("");
      setMessage("");
      onBidCreated(); // Teklif başarılıınca listeyi yenile
    } catch (err: any) {
      setError(err.message || "Teklif verilemedi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auction-stream__form" onSubmit={handleSubmit}>
      {error && <div style={{ color: '#ff4d4f', fontSize: '12px', marginBottom: '8px' }}>{error}</div>}
      <div className="auction-stream__form-price">
        <label className="auction-stream__form__label">Teklifiniz (₺)</label>
        <GlassInput 
          type="number" 
          placeholder="Min. teklif tutarı" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required 
        />
      </div>
      <div className="auction-stream__form-text-area">
        <label className="auction-stream__form__label">Mesajınız (Opsiyonel)</label>
        <Textarea 
          className="auction-stream__form-text-area__message" 
          placeholder="Örn: Bugün gelip elden test edebilirim." 
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button variant="primary" className="w-full" disabled={loading}>
        {loading ? "Gönderiliyor..." : "Teklif Ver"}
      </Button>
    </form>
  );
};