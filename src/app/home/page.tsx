// src/pages/home.js
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/jscomponents/Footer";
import HeroMain from "@/components/jscomponents/HeroMain";
import AdderSection from "@/components/jscomponents/AdderSection";

function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-0">
      <div>
        <Header />
      </div>
      <div className="flex flex-col">
      <div className="flex justify-center items-center text-center ">
          <HeroMain />
        </div>
        <div className="flex justify-center items-center text-center ">
          <Hero />
        </div>
        <div className="flex justify-center items-center text-center ">
          <Products />
        </div>
        <div className="flex justify-center items-center text-center overflow-hidden mt-2">
          <AdderSection />
        </div>
        <div className="flex justify-center items-center text-center overflow-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;