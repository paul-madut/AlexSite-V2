import React from 'react'
import Image from 'next/image'
import { Timeline } from '@/components/ui/timeline'


function Coaching() {
    const data = [
        {
          title: "NUTRITION FOR YOUR GOALS",
          content: (
            <div>
              <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Enjoy delicious, goal-oriented meal plans that fuel your success. From carefully crafted recipes to personalized calorie and macro guidance, we make sure you stay nourished without the monotony of repetitive meals—helping you achieve optimal results while enjoying the process.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://i.pinimg.com/236x/31/96/86/319686d0213d7df858f3f37127f9984b.jpg"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://i.pinimg.com/736x/9e/ad/7f/9ead7f112bcb1dab1202f43103fe5429.jpg"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://preview.redd.it/todays-breakfast-lunch-and-dinner-v0-hme8hjqua2tc1.jpg?width=640&crop=smart&auto=webp&s=6617bf66ebe8707fc2f174d013b9f9c612636c69"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLiqDncIj3LdfNeb75H8SoY_AHUgQAhdmPQ&s"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "CUSTOMIZED TRAINING PLANS",
          content: (
            <div>
              <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Achieve results you never thought possible with personalized training plans designed just for you. Whether you’re looking to build strength, improve endurance, or transform your physique, we’ll provide professional-level support to help you train smarter and harder.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://hips.hearstapps.com/hmg-prod/images/young-muscular-build-athlete-exercising-strength-in-royalty-free-image-1706546541.jpg?crop=0.668xw:1.00xh;0.107xw,0&resize=640:*"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://media.self.com/photos/61bcd0e05aed92fc4251b026/4:3/w_2560%2Cc_limit/GettyImages-1213234926.jpeg"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://www.crossfit.com/wp-content/uploads/2024/07/24072857/Rest-Day-Workout-Of-The-Day-1024x576.jpg"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "ACCOUNTABILITY & PROGRESS TRACKING",
          content: (
            <div>
              <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Stay focused and consistent with our proven accountability system. Weekly check-ins and tailored adjustments ensure you stay on the path to reaching and exceeding your goals, celebrating each milestone along the way.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://exclusive.multibriefs.com/images/exclusive/fitness-goal-accountability.jpg"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
      ];
      return (
        <div className="w-full ">
          <Timeline data={data} />
        </div>
      );
}

export default Coaching