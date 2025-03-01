// import { useRef, useEffect } from "react";

export const GlowButton = () => {
  // const buttonRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (buttonRef.current) {
  //     console.log(buttonRef.current);
  //   }
  // }, []);

  return (
    <div className="relative w-fit">
      {/* <svg
        width="70"
        height="96"
        viewBox="0 0 70 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-5 animate-[moveGlow_8s_infinite]"
      >
        <g filter="url(#filter0_f_24_377)">
          <rect
            x="23.0557"
            y="23"
            width="23.5083"
            height="50.0044"
            rx="11.7542"
            fill="#E7C481"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_24_377"
            x="0.255665"
            y="0.200001"
            width="69.1088"
            height="95.6044"
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
              stdDeviation="11.4"
              result="effect1_foregroundBlur_24_377"
            />
          </filter>
        </defs>
      </svg> */}

      <button
        // ref={buttonRef}
        className="relative z-50 rounded-lg py-2 px-12 bg-[#272C25] ring-2 ring-[#404a3e60] shadow-lg text-white overflow-hidden cursor-pointer text-xl"
      >
        Optimize
      </button>
    </div>
  );
};

// bg-[radial-gradient(circle_at_20%_50%,#C1DEBA26_10%,#272C2530_23%,#272C2567_60%,#272C2567_100%)]
