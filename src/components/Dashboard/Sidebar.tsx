import React from "react";
import "./Sidebar.css";

export const Sidebar: React.FC = () => {
    const userName = localStorage.getItem('user_name') || 'Unknown';
    
    const initials = userName
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    return(
        <aside className="dash-sidebar">
        <div className="dash-sidebar__profile">
          <div className="dash-sidebar__avatar">{initials}</div>
          <div>
            <h4 className="dash-sidebar__name">{userName}</h4>
            <span className="dash-sidebar__type">Bireysel Hesap</span>
          </div>
        </div>

        <nav>
          <h3 className="dash-sidebar__nav-heading">Senin Faaliyetlerin</h3>
          <ul className="dash-sidebar__nav-list">
            <li className="dash-sidebar__nav-item dash-sidebar__nav-item--active">
              <div className="dash-sidebar__item-text">
                <span>Açtığım Talepler</span>
                <span className="dash-sidebar__item-count">2</span>
              </div>
            </li>
            <li className="dash-sidebar__nav-item">
              <div className="dash-sidebar__item-text">
                <span>Katıldığım Mezatlar</span>
                <span className="dash-sidebar__item-count">5</span>
              </div>
            </li>
            <li className="dash-sidebar__nav-item">
              <div className="dash-sidebar__item-text">
                <span>Satıştaki Ürünlerim</span>
                <span className="dash-sidebar__item-count">0</span>
              </div>
            </li>
          </ul>

          <h3 className="dash-sidebar__nav-heading mt-6">Geçmiş Aramaların</h3>
          <ul className="dash-sidebar__nav-simple">
            <li><a href="#"># AM4 Soket Anakart</a></li>
            <li><a href="#"># RTX 3060 Ti</a></li>
            <li><a href="#"># 16GB DDR4 RAM</a></li>
          </ul>
        </nav>
      </aside>
    );
};