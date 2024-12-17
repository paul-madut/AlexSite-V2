"use client";
import { MaskContainer } from "../../components/ui/svg-mask-effect";
import React from "react";

function Quote() {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center  overflow-hidden bg-bgblack">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-bgwhite text-center text-4xl font-bold ">
            "The only bad workout is the one you didn’t do. Stay consistent, and
            the results will follow."
          </p>
        }
        className="h-[20rem] bg-blue-400 rounded-md"
      >
        "The only <span className="text-red">bad workout</span> is the one you{" "}
        <span className="text-red">didn’t do</span>. Stay{" "}
        <span className="text-red">consistent</span>, and the results will
        follow."
      </MaskContainer>
    </div>
  );
}

export default Quote;
