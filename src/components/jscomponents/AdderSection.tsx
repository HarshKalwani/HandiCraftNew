import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const AdderSection = () => {
  return (
    <div className="flex w-full h-[16.875rem] py-[6.25rem]  px-0 justify-around items-center shrink-0 bg-[#FAF3EA] font-sans text-start">
      <div className="flex justify-center items-center">
        <HiOutlineTrophy className="lg:w-[3.75rem] lg:h-[3.75rem] text-[#000] md:w-[2.75rem] md:h-[2.75rem] sm:w-[2.5rem] sm:h-[2.5rem] w-[1.95rem] h-[1.95rem]" />
        <div className="flex items-start flex-col gap-[0.125rem]">
          <p className="lg:text-[1.5625rem] md:text-[1.25rem] text-[0.9rem] font-semibold lg:leading-[2.34375rem] md:leading-[1.95rem] text-[#242424]">
            High Quality
          </p>
          <p className="lg:text-[1.25rem] md:text[1rem] text-[0.9rem] font-medium lg:leading-[1.875rem] md:leading-[1.35rem] text-[#898989]">
            Crafted From Top Materials
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <HiOutlineCurrencyRupee className="lg:w-[3.75rem] lg:h-[3.75rem] text-[#000] md:w-[2.75rem] md:h-[2.75rem] sm:w-[2.5rem] sm:h-[2.5rem] w-[1.95rem] h-[1.95rem]" />
        <div className="flex items-start flex-col gap-[0.125rem]">
          <p className="lg:text-[1.5625rem] md:text-[1.25rem] text-[0.9rem] font-semibold lg:leading-[2.34375rem] md:leading-[1.95rem] text-[#242424]">
            Affordable Prices
          </p>
          <p className="lg:text-[1.25rem] md:text[1rem] text-[0.9rem] font-medium lg:leading-[1.875rem] md:leading-[1.35rem] text-[#898989]">
            Because we want to spread Happiness
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdderSection;
