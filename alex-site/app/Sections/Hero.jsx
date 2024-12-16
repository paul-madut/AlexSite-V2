"use client";
import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

function Hero() {
  const words = ["Look", "Feel", "Be"];

  return (
    <div class="vid h-full overflow-hidden">
      <div className="hero__text top-[40%] left-1/2 absolute ">
        <h1 className="text-9xl text-white font-bold text-center absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[40%] flex  w-full  items-center justify-center ">
          <FlipWords className="text-bgwhite" words={words} />{" "}
          <span className="text-bgwhite"> Better.</span>
        </h1>
      </div>

      <div className="hero__cta top-[50%]  w-full justify-center align-middle items-center absolute flex flex-col ">
        <h2 className="text-bgwhite text-6xl relative"> Become better today!</h2>
       
        <button className="m-2 p-4 px-8 text-6xl w-1/6 rounded-xl b-1 border-b-black text-white bg-red">Sign up</button>
      </div>

      <video
        class=" bg-fixed -z-10 bottom-12 right-0 min-w-full h-1/2  w-full object-cover"
        autoplay
        muted
        loop
        plays-inline
        id="myVideo"
      >
        <source src="/videos/Hero__vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
