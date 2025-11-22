import React from 'react';
import ProductsHeroPage from "@/components/pages/products-hero-page";
import ProductsOverviewPage from "@/components/pages/products-overview-page";

export default function Home() {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <ProductsHeroPage/>
        <ProductsOverviewPage/>
      </div>
    </div>
  );
}