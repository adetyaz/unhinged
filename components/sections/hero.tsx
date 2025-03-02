import { HeroButton } from "../ui/hero-button";
import Image from "next/image";
import { SpinningFan } from "../ui/spinning-fan";
// import { GlowButton } from "../ui/glow-button";
import { Hydraulics } from "../ui/hydraulics";
import { GlowPath } from "../ui/glow-path";

export const Hero = () => {
  return (
    <section className="grid space-y-12 py-20">
      <div className="grid space-y-4 md:space-y-0 md:grid-cols-3 md:gap-4">
        <div className="grid  pt-8">
          <h1 className="font-bold text-[#E7C481] text-[40px] leading-[1.2]">
            Efficiency <br />
            Beyond Limits: Monitor, Control, Sustain.
          </h1>
          <p className="text-[#C0A36C]">
            Unlock unparalleled efficiency: monitor usage, take charge of
            consumption, and sustain a greener future with our cutting-edge
            solution and advanced features.
          </p>
          <HeroButton />
        </div>
        <div>
          <div className="relative flex items-center justify-center">
            <div className="w-fit bg-gradient-to-b from-[#ffffff05] to-transparent rounded-[4rem] relative shadow-[-2px_0px_5px_0px_rgba(0,0,0,0.25)]">
              <svg
                width="437"
                height="570"
                viewBox="0 0 437 570"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-[pulseGlow_5s_infinite] ease-[cubic-bezier(0.33, 1, 0.68, 1)] rounded-full blur-2xl"
              >
                <g filter="url(#filter0_f_1_771)">
                  <circle
                    cx="170" // Adjust as needed
                    cy="170" // Adjust as needed
                    r="154.46" // Half of original square size to fit nicely
                    fill="url(#paint0_radial_1_771)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_771"
                    x="-228.4"
                    y="-228.4"
                    width="797.72"
                    height="797.72"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="122.2"
                      result="effect1_foregroundBlur_1_771"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_1_771"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(170 170) rotate(67.8623) scale(143.475 152.61)"
                  >
                    <stop stopColor="#16C277">
                      <animate
                        attributeName="stop-color"
                        values="#46BCFF;#3990F7;#16C277"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="1" stopColor="#0A486E">
                      <animate
                        attributeName="stop-color"
                        values="#46BCFF;#FEF6D7;#0A486E"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </radialGradient>
                </defs>
              </svg>
              <Image
                src="/images/phone-frame.png"
                alt="phone frame"
                width={350}
                height={544}
              />
            </div>
            <Image
              src="/images/iPhone.png"
              alt="hero image"
              width={190}
              height={450}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <SpinningFan />
          <Hydraulics />
        </div>
      </div>
      <div>
        {/* <GlowButton /> */}
        <div className="absolute bottom-0 right-[20%]">
          <GlowPath />
        </div>
      </div>
    </section>
  );
};
