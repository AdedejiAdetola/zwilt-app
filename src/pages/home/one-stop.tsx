import { Category, Profile, Skill } from "@/icons";
import React from "react";

const OneStop = () => {
  return (
    <section>
      <div className="h-[132.99px] w-full bg-[url('/img/pattern.png')] bg-cover"></div>
      <div className="pt-[183px] pb-[148px] bg-[url('/img/bg1.png')] bg-cover app-container">
        <div className="w-[977px] mx-auto">
          <h4 className="text-center font-bold text-[54px] leading-[64px]">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h4>
        </div>

        <div className="mt-[90px]">
          <div className="flex gap-[200px]">
            <div className="w-[380px]">
              <h4 className="text-[#202229] text-[24px] font-medium">
                Find Dev and IT professionals to scale your business.
              </h4>

              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center">
                  <Skill />
                  <span className="text-[16px] text-[#202229CC]">
                    989 Skills
                  </span>
                </div>
                <div className="flex items-center">
                  <Category />
                  <span className="text-[16px] text-[#202229CC]">
                    45 Sub-Categories
                  </span>
                </div>
                <div className="flex items-center">
                  <Profile />
                  <span className="text-[16px] text-[#202229CC]">
                    1011 Profiles
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStop;
