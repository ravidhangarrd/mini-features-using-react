import React, { useState } from "react";

const ProfileCard = () => {
  const [isMouseOverFollBtn, setIsMouseOverFollBtn] = useState(true);
  const [isMouseOverMessBtn, setIsMouseOverMessBtn] = useState(true);

  const handleMouseFollOver = () => {
    setIsMouseOverFollBtn(!isMouseOverFollBtn);
  };

  const handleMouseMessOver = () => {
    setIsMouseOverMessBtn(!isMouseOverMessBtn);
  };

  return (
    <>
      <div className="w-screen h-screen bg-purple-200 flex items-center justify-center">
        <div className="w-[250px] h-[200px] p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center ">
          <div className="flex gap-2 items-center mb-5">
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="/images/profile.png"
                alt="profile"
              />
            </div>

            <div>
              <div>
                <p className="font-Merriweather text-[12px] font-bold text-[#291F68]">
                  Debra Stephens
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img
                  className="w-[18px] h-[20px]"
                  src="/images/location_icon.svg"
                  alt="location icon"
                />
                <p className=" text-[8px] font-semibold text-[#291F68]">
                  Minneapolis, MN, USA
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div
              onMouseEnter={handleMouseFollOver}
              onMouseLeave={handleMouseFollOver}
              className="py-2 w-full flex justify-center rounded-md border border-[#291F68] items-center gap-2 bg-[#291F68] text-white text-[10px] transform delay-150 duration-200 ease-in-out hover:bg-white hover:text-black
            "
            >
              <div className="relative">
                <img
                  className="w-[15px] h-[15px]"
                  src="/images/follow_icon.svg"
                  alt="follow icon"
                />
                <img
                  className={
                    isMouseOverFollBtn
                      ? "w-[15px] h-[15px] absolute top-0 hidden"
                      : "w-[15px] h-[15px] absolute top-0 "
                  }
                  src="/images/follow_icon_dark.svg"
                  alt="follow icon"
                />
              </div>
              <p className=" font-semibold">Follow</p>
            </div>

            <div
              onMouseEnter={handleMouseMessOver}
              onMouseLeave={handleMouseMessOver}
              className="py-2 w-full flex justify-center rounded-md items-center gap-2 border border-black bg-white text-black text-[10px] transform delay-150 duration-200 ease-in-out hover:bg-[#291F68] hover:text-white "
            >
              <div className="relative">
                <img
                  className="w-[15px] h-[15px]"
                  src="/images/message_icon.svg"
                  alt="follow icon"
                />
                <img
                  className={
                    isMouseOverMessBtn
                      ? "w-[15px] h-[15px] absolute top-0 hidden"
                      : "w-[15px] h-[15px] absolute top-0"
                  }
                  src="/images/message_icon_light.svg"
                  alt="follow icon"
                />
              </div>
              <p className=" font-semibold">Message</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
