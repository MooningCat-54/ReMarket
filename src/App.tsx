import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Auth } from './pages/Auth/Auth';
import { CorporateProfile } from './pages/CorporateProfile/CorporateProfile';
import { CreatePost } from './pages/CreateTabs/CreatePost'; // Senin mevcut klasör yolun
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Home } from './pages/Home/Home';
import { LiveAuction } from './pages/LiveAuction/LiveAuction';
import { Marketplace } from './pages/Marketplace/Marketplace';
import { UserProfile } from './pages/UserProfile/UserProfile';

import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/auth" element={<Auth />} />
          
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/bireysel" element={<UserProfile />} />
          <Route path="/profile/kurumsal" element={<CorporateProfile />} />
          
          <Route path="/auction" element={<LiveAuction />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;