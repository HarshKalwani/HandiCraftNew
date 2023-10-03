import React from "react";
import Header from "../Header";
import ProductCategory from "../ProductCategory";
import AdderSection from "./AdderSection";
import Footer from "./Footer";

const SingleCategory = () => {
  return (
    <div className="relative bg-white flex flex-col ">
      
      <div>
        <Header />
      </div>
      <div className="bg-img w-[full] h-[19.75rem] bg-cover bg-center flex justify-center items-center">
        <p className="text-[1rem] md:text-[2rem] lg:text[3rem] font-semibold leading-normal text-[#000] font-serif z-10 ">
          Woodworking Wonders, Made by Hand
        </p>
      </div>
      <div className="relative mt-[5rem]">
        <ProductCategory />
      </div>
      <div className="relative mt-2">
        <AdderSection />
      </div>
      <div className="relative ">
        <Footer />
      </div>
    </div>
  );
};

export default SingleCategory;
