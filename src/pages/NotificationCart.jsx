import React, { useState } from "react";

const NotificationCart = () => {
  const [showNotificationCart, setShowNotificationCart] = useState(true);
  const handleCloseNotificationCart = () => {
    setShowNotificationCart(!showNotificationCart);
    setTimeout(() => {
      setShowNotificationCart(true);
    }, 2000);
  };

  return (
    <>
      <div className="w-screen h-screen bg-purple-200 flex justify-center items-center">
        <div
          className={
            showNotificationCart
              ? "w-[300px] h-[150px] bg-white rounded-xl shadow-lg px-8 py-8 flex flex-col gap-3 relative"
              : "w-[300px] h-[150px] bg-white rounded-xl shadow-lg px-8 py-8 flex flex-col gap-3 relative" +
                " hidden"
          }
        >
          <div
            onClick={handleCloseNotificationCart}
            className="p-1 bg-slate-100 rounded-full absolute top-5 right-5 hover:bg-slate-200 shadow-sm active:bg-slate-300 transition delay-75 duration-150 ease-in hover:cursor-pointer"
          >
            <img
              className="w-[25px] h-[25px]"
              src={"/images/cross_icon.png"}
              alt="cross icon"
            />
          </div>

          <div>
            <p className="text-sm font-bold">Show notifications for</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px] rounded-lg shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center">
              <img
                className="w-[18px] h-[20px]"
                src="/images/bell_icon.png"
                alt="bell icon"
              />
            </div>
            <p className="text-[10px] font-semibold">www.website.com</p>
          </div>

          <div className="flex justify-end text-[10px] font-semibold gap-2">
            <button className="text-red-500 border rounded-md border-red-500 shadow-sm px-2 py-1 transition delay-75 duration-150 ease-in hover:bg-red-500 hover:text-white active:bg-red-800 ">
              Block
            </button>
            <button className="text-green-500 border rounded-md border-green-500 shadow-sm px-2 py-1 transition delay-75 duration-150 ease-in hover:bg-green-500 hover:text-white active:bg-green-800 ">
              Allow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCart;
