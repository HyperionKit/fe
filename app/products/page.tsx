import React from 'react';
import ProductsHeroPage from "@/components/products-hero-page";
import ProductsOverviewPage from "@/components/products-overview-page";
import ProductsDemoShowcase from "@/components/static/ProductsDemoShowcase";
import DemoProvider from "@/components/static/DemoProvider";

export default function Home() {
  return (
    <DemoProvider>
      <div className="w-full">
        <div className="pt-16 sm:pt-20 lg:pt-24">
          <ProductsHeroPage/>
          <ProductsOverviewPage/>
          <ProductsDemoShowcase className="py-16"/>
        </div>
      </div>
    </DemoProvider>
  );
}