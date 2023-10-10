// src/pages/home.js
import React from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/jscomponents/Footer";
import HeroMain from "@/components/jscomponents/HeroMain";
import AdderSection from "@/components/jscomponents/AdderSection";
import ProductCategory from "@/components/ProductCategory";

function Page() {
  return (
    <div className="flex flex-col gap-10 md:gap-0 mx-auto overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div className="flex flex-col ">
        <div className="bg-img w-[full] h-[19.75rem] bg-cover bg-center flex justify-center items-center">
          <p className="text-[1rem] md:text-[2rem] lg:text[3rem] font-semibold leading-normal text-[#000] font-serif z-10 ">
            Woodworking Wonders, Made by Hand
          </p>
        </div>
        <div className=" " id="Products">
          <ProductCategory/>
        </div>
        <div className="flex justify-center items-center text-center overflow-hidden mt-2">
          <AdderSection />
        </div>
        <div className="flex justify-center items-center text-center overflow-hidden" id="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Page;