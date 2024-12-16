import React from "react";

function Banner() {
  return (
    <div className="fixed__banner h-12 w-full relative bg-black">
      <div className="fixed__banner__content flex justify-center items-center space-x-4">
        <div className="fixed__banner__content__text">
          <p className="text-white">
            Get 20% off (First Program) by joing the waitlist
          </p>
        </div>
        <div className="fixed__banner__content__button">
          <button className="m-2 p-1 px-4 rounded-xl b-1 border-b-black text-white bg-red">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
