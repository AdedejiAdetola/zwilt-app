import React from "react";
import {
  ListIcon,
  ListGreen,
  ListOrange,
  LogoWhite,
  Star,
  Rating,
} from "@/icons";
import Link from "next/link";
import Image from "next/image";

const riskData = [
  {
    title: "We pick the best for you to select.",
  },
  {
    title: "Thousands of vetted candidates in dozens of categories.",
  },
  {
    title: "Risk-free resource swapping for the best fit.",
  },
];

const openBook = [
  {
    title: "Easy and transparent one-to-one chat with candidates.",
  },
  {
    title: "Simple and convenient payment methods.",
  },
  {
    title: "Review past ratings.",
  },
];
const stayInLoop = [
  {
    title: "Track your staff activity down to every minute with screenshots.",
  },
  {
    title: "Comprehensive timesheet data to process payments.",
  },
  {
    title: "Create projects to organize and assign tasks more effectively.",
  },
];

const WhyZwilt = () => {
  return (
    <div className="app-container why-sections bg-gradient-to-b from-[#fefeff] to-[#edefff] py-[186px] -skew-y-[2deg] transform overflow-x-scroll ">
      <div className="transform skew-y-[2deg] flex items-center gap-x-[95px] ">
        <div className="min-w-[380px] space-y-[37px]">
          <h5 className="font-bold text-[54px] leading-[64px]">
            Why choose Zwilt?
          </h5>
          <p className="text-[22px] font-light leading-[32px] mr-[54px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div className="min-w-[1300px] h-[652px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
          <div>
            <h5 className="max-w-[464px] font-bold leading-[64px] text-[54px]">
              Onboard without the risk.
            </h5>
            <div className="mt-[37px] mb-[44px]">
              {riskData.map((item, i) => (
                <div className="flex items-center gap-x-[16px]" key={i}>
                  <ListIcon className="w-[18px] h-[7px]" />
                  <span className="text-[22px] font-light leading-[32px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <Link href={"#"} className="custom-btn learn">
              <label>Learn More</label>
              <span>
                <LogoWhite className="w-[25px] h-[15px]" />
              </span>
            </Link>
          </div>
          <div className="">
            <div className="absolute w-[278px] h-[157px] bg-[url('/img/onboard-img-1.png')] bg-cover left-[659px] top-[42px] rounded-[17px]"></div>
            <div className="absolute w-[347px] h-[174px] bg-[url('/img/onboard-card-2.png')] bg-cover left-[602px] bottom-[41px] rounded-[17px] drop-shadow-lg"></div>
            <div className="absolute w-[280px] h-[113px] bg-[url('/img/onboard-card-3.png')] bg-cover right-[40px] bottom-[136px] rounded-[17px] drop-shadow-lg"></div>
            <div className="absolute rounded-[17px] bg-[#fff] w-[281px] h-[304px] drop-shadow-2xl z-50 right-[238px] top-[133px] pb-[27px] pt-[37px]">
              <div className="flex-col justify-center items-center">
                <Image
                  src={"/img/onboard-img-2.png"}
                  alt="Onboard"
                  width={121}
                  height={121}
                  className="mx-auto"
                />
                <h6 className="gradient-text block text-center">
                  Ariana Marie
                </h6>
              </div>
              <div className="flex items-center gap-x-1 px-[26px] mt-[24px]">
                <label className="text-[8px] bg-[#E2E2E2] leading-[10.4px] py-[3.6px] px-[6.5px] font-bold rounded-[24px]">
                  3d Modeling
                </label>
                <label className="text-[8px] bg-[#E2E2E2] leading-[10.4px] py-[3.6px] px-[6.5px] font-bold rounded-[24px]">
                  Character Rigging
                </label>
                <label className="text-[8px] bg-[#E2E2E2] leading-[10.4px] py-[3.6px] px-[6.5px] font-bold rounded-[24px]">
                  Character Rigging
                </label>
              </div>
              <div className="flex items-center justify-between px-[26px] mt-[16px]">
                <div
                  className="flex items-center gap-x-1 text-sm font-semibold text-[#A9A9AD]
                "
                >
                  <span>5.0</span>
                  <Rating />
                  <span>15</span>
                </div>
                <button className="bg-[#181818] w-[109px] h-[30px] rounded-[8px] text-white text-xs font-medium">
                  Take Interview
                </button>
              </div>
            </div>
            <div className="absolute top-[102px] right-[165px]">
              <Star className="w-[60px] h-[60px]" />
            </div>
          </div>
        </div>
        <div className="min-w-[1300px] h-[652px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
          <div>
            <h5 className="max-w-[239px] font-bold leading-[64px] text-[54px]">
              An open book.
            </h5>
            <div className="mt-[37px] mb-[44px]">
              {openBook.map((item, i) => (
                <div className="flex items-center gap-x-[16px]" key={i}>
                  <ListOrange className="w-[18px] h-[7px]" />
                  <span className="text-[22px] font-light leading-[32px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <Link href={"#"} className="custom-btn learn">
              <label>Learn More</label>
              <span>
                <LogoWhite className="w-[25px] h-[15px]" />
              </span>
            </Link>
          </div>
          <Image
            src={"/img/card-2-img.png"}
            alt={"Card 2"}
            width={577}
            height={451}
          />
        </div>
        <div className="min-w-[1380px] h-[652px]">
          <div className="w-[1300px] h-[652px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
            <div>
              <h5 className="max-w-[279px] font-bold leading-[64px] text-[54px]">
                Stay in the loop.
              </h5>
              <div className="mt-[37px] mb-[44px]">
                {stayInLoop.map((item, i) => (
                  <div className="flex items-center gap-x-[16px]" key={i}>
                    <ListGreen className="w-[18px] h-[7px]" />
                    <span className="text-[22px] font-light leading-[32px]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <Link href={"#"} className="custom-btn learn">
                <label>Learn More</label>
                <span>
                  <LogoWhite className="w-[25px] h-[15px]" />
                </span>
              </Link>
            </div>
            <Image
              src={"/img/card-3-img.png"}
              alt={"Card 2"}
              width={542}
              height={564}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyZwilt;
