import React from "react";
import { LogoOrange } from "@/icons";

const Faq = () => {
  return (
    <div className="bg-[#F3F3F3]  -skew-y-[2deg] transform py-[134px]">
      <div className="transform skew-y-[2deg] ">
        <h4 className="font-bold text-[54px] leading-[54px] text-[#202229] text-center">
          Frequently asked questions
        </h4>
        <div className="pt-[88px]">
          <div className="flex items-center justify-between border-y border-y-[#D6D6D6] h-[112px] relative">
            <label className="absolute left-0 top-0 bottom-0 w-[230px] border-r border-r-[#D6D6D6] h-full  flex items-center justify-center text-[22px] font-semibold ">
              General
            </label>

            <label className="flex-1 h-full  flex items-center justify-center text-[22px] font-light">
              I want to work part-time, is that possible
            </label>
          </div>
          
          <div className="flex items-center justify-between border-b border-b-[#D6D6D6] h-[112px] relative">
            <label className="flex-1 h-full  flex items-center justify-center text-[22px] font-light">
              I want to work part-time, is that possible
            </label>
            <LogoOrange className="w-[26px] h-[16px] absolute right-[90px] top-[50%]" />
          </div>

          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start text-[22px] font-semibold ">
              How does the payment works?
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px]">
            <label className="h-full w-[390px]  flex items-center justify-start text-[22px] font-light ">
              How much can I earn?
            </label>
          </div>
          <div className="flex items-center justify-between border-y border-y-[#D6D6D6] h-[112px] relative">
            <label className="absolute left-0 top-0 bottom-0 w-[230px] border-r border-r-[#D6D6D6] h-full  flex items-center justify-center text-[22px] font-semibold bg-[#E8E8E8]">
              General
            </label>
            <label className="absolute left-[230px] top-0 bottom-0 w-[299px] border-r border-r-[#D6D6D6] h-full  flex items-center justify-center text-[22px] font-semibold">
              Joining Process
            </label>

            <label className="flex-1 h-full  flex items-center justify-center text-[22px] font-light">
              I want to work part-time, is that possible
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start text-[22px] font-light ">
              How long are the average projects?
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start text-[22px] font-light ">
              How long are the average projects?
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start text-[22px] font-light ">
              How much can I earn?
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
