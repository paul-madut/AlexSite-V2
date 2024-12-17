"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import React from "react";

function Hero() {
  const words = ["Look", "Feel", "Be"];

  return (
    <div className="vid h-full overflow-hidden">
      <div className="hero__text top-[40%] left-1/2 absolute ">
        <h1 className="text-9xl text-white font-bold text-center absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[40%] flex  w-full  items-center justify-center ">
          <FlipWords className="text-bgwhite" words={words} />{" "}
          <span className="text-bgwhite"> Better.</span>
        </h1>
      </div>

      <div className="hero__cta top-[50%]  w-full justify-center align-middle items-center absolute flex flex-col ">
        <h2 className="text-bgwhite text-6xl relative"> Become better today!</h2>
       
        <Button borderRadius="1.75rem" className=" text-white text-xl bg-red">Sign up</Button>
      </div>

      <video
        className=" bg-fixed -z-10 bottom-12 right-0 min-w-full h-1/2  w-full object-cover"
        autoPlay
        muted
        loop
        plays-inline = "true"
        id="myVideo"
      >
        <source src="/videos/Hero__vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
