import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import './Auth.css';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "Login endpoint'ine istek atılıyor..." : "Register endpoint'ine istek atılıyor...");
    //fetch('http://localhost:5000/api/auth', { method: 'POST', body: ... })
  };

  return (
    <main className="auth-wrapper">
      
      <div className="auth-header">
        <div className="auth-header__logo">ReMarket</div>
        <h1 className="auth-header__title">
          {isLogin ? "ReMarket'a giriş yap" : "ReMarket'a katıl"}
        </h1>
      </div>

      <div className="auth-box">
        <form className="auth-form" onSubmit={handleSubmit}>
          
          {!isLogin && (
            <>
              <div className="auth-form__group">
                <label>Kullanıcı Adı</label>
                <GlassInput type="text" required />
              </div>
            </>
          )}
          
          <div className="auth-form__group">
            <label>E-posta adresi</label>
            <GlassInput type="email" required />
          </div>
          
          <div className="auth-form__group">
            <label>
              Şifre
              {isLogin && <a href="#" className="auth-form__link">Şifreni mi unuttun?</a>}
            </label>
            <GlassInput type="password" required />
          </div>

          <Button variant="primary" className="w-full mt-2" type="submit">
            {isLogin ? "Giriş yap" : "Hesap oluştur"}
          </Button>

        </form>
      </div>

      <div className="auth-callout">
        {isLogin ? (
          <p>
            Hesabın yok mu? <button type="button" className="auth-callout__btn" onClick={() => setIsLogin(false)}>Kayıt ol</button>
          </p>
        ) : (
          <p>
            Zaten bir hesabın var mı? <button type="button" className="auth-callout__btn" onClick={() => setIsLogin(true)}>Giriş yap</button>
          </p>
        )}
      </div>

    </main>
  );
};