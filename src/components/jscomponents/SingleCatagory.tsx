import React from "react";
import Header from "../Header";
import ProductCategory from "../ProductCategory";
import AdderSection from "./AdderSection";
import Footer from "./Footer";

const SingleCategory = ({searchParams}:any) => {
  return (
    <div className="flex flex-col gap-10 md:gap-0 mx-auto overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div className="bg-img w-[full] h-[19.75rem] bg-cover bg-center flex justify-center items-center">
        <p className="text-[1rem] md:text-[2rem] lg:text[3rem] font-semibold leading-normal text-[#000] font-serif z-10 ">
          Woodworking Wonders, Made by Hand
        </p>
      </div>
      <div className="flex  justify-center items-center text-center ">
        <ProductCategory type={searchParams.type.toString()} />
      </div>
      <div className="flex justify-center items-center text-center overflow-hidden mt-2">
        <AdderSection />
      </div>
      <div className="flex justify-center items-center text-center overflow-hidden">
        <Footer />
      </div>
    </div>
  );
};

export default SingleCategory;