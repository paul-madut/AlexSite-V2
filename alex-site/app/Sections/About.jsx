import React from 'react'
import { Compare } from "../../components/ui/compare";

function About() {
  return (
    <div className="about__container flex w-full bg-black py-4">

    <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
    <div
      style={{
        transform: "rotateX(15deg) translateZ(80px)",
      }}
      className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-[#171717] border-neutral-800 dark:border-neutral-800  w-2/4 h-1/2 md:h-3/4"
    >
      <Compare
        firstImage="/before_alex.png"
        secondImage="/after_alex.png"
        firstImageClassName="object-cover object-left-top w-full"
        secondImageClassname="object-cover object-left-top w-full"
        className="w-full h-full rounded-[22px] md:rounded-lg"
        slideMode="hover"
        autoplay={true}
        />
    </div>
  </div>
  <div className="about__text">
    <div className="about__paragraph ml-36 w-1/2 text-center">
    <h1 className='text-6xl text-red font-bold  mt-12'>Why Us?</h1>

    <p className='text-2xl text-bgwhite mr-12 mt-12'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum et quibusdam omnis nulla tempore, adipisci consequuntur. Maiores possimus dolor obcaecati maxime, perspiciatis voluptates adipisci architecto. Sint tempore unde at culpa?</p>
      <br />
      <p className='text-2xl text-bgwhite mr-12 mt-12'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum et quibusdam omnis nulla tempore, adipisci consequuntur. Maiores possimus dolor obcaecati maxime, perspiciatis voluptates adipisci architecto. Sint tempore unde at culpa?</p>

<br />
<p className='text-2xl text-bgwhite mr-12 mt-12'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum et quibusdam omnis nulla tempore, adipisci consequuntur. Maiores possimus dolor obcaecati maxime, perspiciatis voluptates adipisci architecto. Sint tempore unde at culpa?</p>

    </div>
  </div>
        </div>
  )
}

export default About