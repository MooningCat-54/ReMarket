import React, { useEffect, useState } from 'react';
import './Dashboard.css';

import { DashWidgets } from '../../components/Dashboard/DashWidgets';
import { MainFeed } from '../../components/Dashboard/MainFeed';
import { Sidebar } from '../../components/Dashboard/Sidebar';
import { getProducts, type Product } from '../../services/api';

export const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Dashboard verileri çekilirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-layout">
      
      <Sidebar />

      <div className="dash-main-wrapper">
        <div className="dash-content-grid">
          
          <MainFeed products={products} loading={loading} />

          <DashWidgets products={products} />

        </div>
      </div>
      
    </div>
  );
};