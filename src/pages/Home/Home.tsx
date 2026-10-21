// src/pages/Home/Home.tsx
import React from "react";
import { FeatureSection } from "../../components/Home/FeatureSection";
import { HeroSection } from "../../components/Home/HeroSection";

export const Home: React.FC = () => {
  return (
    <main className="home-page-fluid">
      <HeroSection />
      <FeatureSection />
    </main>
  );
};
