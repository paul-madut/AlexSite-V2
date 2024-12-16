"use client";
import { MaskContainer } from "../../components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    (<div
      className="h-[20rem] w-screen flex items-center justify-center bg-bgblack overflow-hidden">
      <MaskContainer
        revealText={
          <p
            className="max-w-4xl mx-auto text-white text-center  text-4xl font-bold">
            <span className="text-6xl">"</span> If all else fails the scratch
            and sniff will never lead you astray.<span className="text-6xl">"</span> - Alex L Dory
          </p>
        }
        className="h-[20rem] rounded-md">
        <span className="text-red text-6xl">"</span> If all else fails the <span className="text-red">scratch</span>
        and <span className="text-red">sniff</span> will never lead you astray.<span className="text-red text-6xl">"</span> - Alex <span className="text-red">L</span> Dory
      </MaskContainer>
    </div>)
  );
}
