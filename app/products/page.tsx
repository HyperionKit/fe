import React from 'react';
import ProductsHeroPage from "@/components/products-hero-page";
import ProductsOverviewPage from "@/components/products-overview-page";

export default function Home() {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <ProductsHeroPage/>
        <ProductsOverviewPage/>
      </div>
    </div>
  );
}