import { AtomBuilding } from "../ui/atom-building";
import { AtomEnergy } from "../ui/atom-energy";
// import { AtomOutframe } from "../ui/atom-outframe";
import { AtomFan } from "../ui/atom-fan";
import { AtomHydraulic } from "../ui/atom-hydraulic";
import { AtomNuclear } from "../ui/atom-nuclear";
import { AtomShadow } from "../ui/atom-shadow";
import { SunGlow } from "../ui/sun-glow";
import { AtomPanel } from "../ui/atom-panel";

// import Image from "next/image";

export const Energy = () => {
  return (
    <section className="grid py-16 space-y-4 justify-center items-center text-center relative">
      <>
        <svg
          width="1"
          height="1024"
          viewBox="0 0 1 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1 left-[8%]"
        >
          <line
            x1="0.195"
            y1="8.52372e-09"
            x2="0.194955"
            y2="1023.99"
            stroke="url(#paint0_linear_1_2454)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2454"
              x1="-0.5"
              y1="-2.18557e-08"
              x2="-0.500045"
              y2="1023.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B5249" />
              <stop offset="0.2" stopColor="#5D8173" stopOpacity="0" />
              <stop offset="0.74" stopColor="#648B7B" stopOpacity="0" />
              <stop offset="1" stopColor="#84B8A4" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="1"
          height="1024"
          viewBox="0 0 1 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 left-[16%]"
        >
          <line
            x1="0.195"
            y1="8.52372e-09"
            x2="0.194955"
            y2="1023.99"
            stroke="url(#paint0_linear_1_2459)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2459"
              x1="-0.00581057"
              y1="1023.99"
              x2="0.00448373"
              y2="4.50755e-08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C6F67" />
              <stop offset="0.276147" stopColor="#5C6F67" stopOpacity="0" />
              <stop offset="0.755265" stopColor="#5C6F67" stopOpacity="0" />
              <stop offset="0.985" stopColor="#5C6F67" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="1"
          height="1024"
          viewBox="0 0 1 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 left-[35%]"
        >
          <line
            x1="0.195"
            y1="8.52372e-09"
            x2="0.194955"
            y2="1023.99"
            stroke="url(#paint0_linear_1_2458)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2458"
              x1="-0.00581057"
              y1="1023.99"
              x2="0.00448373"
              y2="4.50755e-08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C6F67" />
              <stop offset="0.276147" stopColor="#5C6F67" stopOpacity="0" />
              <stop offset="0.755265" stopColor="#5C6F67" stopOpacity="0" />
              <stop offset="0.985" stopColor="#5C6F67" />
            </linearGradient>
          </defs>
        </svg>
      </>

      <h2 className="text-4xl text-[#E7C481]">
        Energy: <br />
        Down to the Atom
      </h2>
      <p className="text-[#C0A36C]">Delivering the minutest spark of energy</p>
      <div className="relative grid place-items-center">
        <>
          <SunGlow />
          <AtomEnergy />
          <AtomShadow />
        </>
        {/* <Image
          src="/images/out-frame.png"
          height={700}
          width={900}
          alt="atom frame"
          className="absolute left-1/2 -translate-x-1/2 top-32 h-[50rem] w-[60rem]"
        /> */}

        <AtomHydraulic />
        <AtomPanel />
        <AtomFan />
        <AtomNuclear />
        <AtomBuilding />
      </div>
      <>
        <svg
          width="1"
          height="1024"
          viewBox="0 0 1 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-[35%] -top-5 absolute"
        >
          <line
            x1="0.195"
            y1="8.52372e-09"
            x2="0.194955"
            y2="1023.99"
            stroke="url(#paint0_linear_1_2457)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2457"
              x1="-0.00581057"
              y1="1023.99"
              x2="0.00448373"
              y2="4.50755e-08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C6F67" />
              <stop offset="0.276147" stopColor="#5C6F67" stopOpacity="0" />
              <stop offset="0.755265" stopColor="#5C6F67" stopOpacity="0" />
              <stop offset="0.985" stopColor="#5C6F67" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="1"
          height="1024"
          viewBox="0 0 1 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 right-[16%]"
        >
          <line
            x1="0.195"
            y1="8.52372e-09"
            x2="0.194955"
            y2="1023.99"
            stroke="url(#paint0_linear_1_2456)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2456"
              x1="-0.5"
              y1="-2.18557e-08"
              x2="-0.500045"
              y2="1023.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C6F67" />
              <stop offset="0.26736" stopColor="#7D988D" stopOpacity="0" />
              <stop offset="0.797929" stopColor="#96B5A9" stopOpacity="0" />
              <stop offset="1" stopColor="#B0D5C6" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="1"
          height="1024"
          viewBox="0 0 1 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 right-[6%]"
        >
          <line
            x1="0.195"
            y1="8.52372e-09"
            x2="0.194955"
            y2="1023.99"
            stroke="url(#paint0_linear_1_2455)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2455"
              x1="-0.5"
              y1="-2.18557e-08"
              x2="-0.500045"
              y2="1023.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B5249" />
              <stop offset="0.32" stopColor="#5C8072" stopOpacity="0" />
              <stop offset="1" stopColor="#84B8A4" />
            </linearGradient>
          </defs>
        </svg>
      </>
    </section>
  );
};
