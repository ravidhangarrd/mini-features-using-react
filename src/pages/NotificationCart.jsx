import React from "react";
import bellIconImg from "../assets/bell_icon.png";
import crossIconImg from "../assets/cross_icon.png";

const NotificationCart = () => {
  return (
    <>
      <div className="w-screen h-screen bg-purple-200 flex justify-center items-center">
        <div className="w-[300px] h-[150px] bg-white rounded-xl shadow-lg px-8 py-8 flex flex-col gap-3 relative">
          <div className="p-1 bg-slate-100 rounded-full absolute top-5 right-5 hover:bg-slate-200 shadow-sm active:bg-slate-300">
            <img
              className="w-[25px] h-[25px]"
              src={crossIconImg}
              alt="cross icon"
            />
          </div>

          <div>
            <p className="text-sm font-bold">Show notifications for</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px] rounded-lg  bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center">
              <img
                className="w-[18px] h-[20px]"
                src={bellIconImg}
                alt="bell icon"
              />
            </div>
            <p className="text-[10px] font-semibold">www.website.com</p>
          </div>

          <div className="flex justify-end text-[10px] font-semibold gap-2">
            <button className="text-red-500 border rounded-sm border-red-500 shadow-sm px-2 py-1 hover:bg-red-500 hover:text-white active:bg-red-600 ">
              Block
            </button>
            <button className="text-green-500 border rounded-sm border-green-500 shadow-sm px-2 py-1 hover:bg-green-500 hover:text-white active:bg-green-600 ">
              Allow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCart;
