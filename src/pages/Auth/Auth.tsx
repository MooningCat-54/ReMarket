import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { GlassInput } from '../../components/ui/GlassInput';
import { loginUser, registerUser } from '../../services/api';
import './Auth.css';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  // Form State'leri
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UI State'leri
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const data = await loginUser({ email, password });

        localStorage.setItem('user_id', data.user_id.toString());
        localStorage.setItem('user_name', data.name);

        navigate('/dashboard');
      } else {
        await registerUser({ name, email, password });
        
        alert('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
        setIsLogin(true);
        setPassword('');
      }
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
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
        {error && (
          <div className="auth-error-message" style={{ color: '#ff4d4d', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          
          {!isLogin && (
            <div className="auth-form__group">
              <label>Kullanıcı Adı</label>
              <GlassInput 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          )}
          
          <div className="auth-form__group">
            <label>E-posta adresi</label>
            <GlassInput 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="auth-form__group">
            <label>
              Şifre
              {isLogin && <a href="#" className="auth-form__link">Şifreni mi unuttun?</a>}
            </label>
            <GlassInput 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <Button 
            variant="primary" 
            className="w-full mt-2" 
            type="submit"
            disabled={loading}
          >
            {loading ? "İşleniyor..." : isLogin ? "Giriş yap" : "Hesap oluştur"}
          </Button>

        </form>
      </div>

      <div className="auth-callout">
        {isLogin ? (
          <p>
            Hesabın yok mu?{' '}
            <button 
              type="button" 
              className="auth-callout__btn" 
              onClick={() => {
                setError(null);
                setIsLogin(false);
              }}
            >
              Kayıt ol
            </button>
          </p>
        ) : (
          <p>
            Zaten bir hesabın var mı?{' '}
            <button 
              type="button" 
              className="auth-callout__btn" 
              onClick={() => {
                setError(null);
                setIsLogin(true);
              }}
            >
              Giriş yap
            </button>
          </p>
        )}
      </div>

    </main>
  );
};