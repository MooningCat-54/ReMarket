import React from 'react';
import './Dashboard.css';

import { DashWidgets } from '../../components/Dashboard/DashWidgets';
import { MainFeed } from '../../components/Dashboard/MainFeed';
import { Sidebar } from '../../components/Dashboard/Sidebar';

/* sütun olarak ayırdım çünkü sidebar ekranın 3/1 kaplıyordu bu sebeple ekrandaki her bir sütunu component gibi yazdım */

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-layout">
      
      {/* --- SOL SÜTUN (Sola Sabit) --- */}
      <Sidebar/>

      {/* --- ORTA VE SAĞ SÜTUNUN KAPSAYICISI --- */}
      <div className="dash-main-wrapper">
        <div className="dash-content-grid">
          
          {/* ORTA SÜTUN: Ana Akış */}
          <MainFeed />

          {/* SAĞ SÜTUN: Widgets */}
          <DashWidgets />

        </div>
      </div>
      
    </div>
  );
};