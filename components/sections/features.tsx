import Image from "next/image";
import { SolarPanel } from "../ui/solar-panel";
import { NuclearStation } from "../ui/nuclear-station";
import { Draulics } from "../ui/draulics";
import { Hydroplant } from "../ui/hydroplant";
import { Fan } from "../ui/fan";

export const Features = () => {
  return (
    <section className="py-8 px-24 relative">
      <>
        <svg
          width="1"
          height="768"
          viewBox="0 0 1 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1 left-[8%]"
        >
          <line
            y1="-0.195"
            x2="768"
            y2="-0.195"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0 768)"
            stroke="url(#paint0_linear_1_2543)"
            strokeWidth="0.39"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2543"
              x1="0"
              y1="0.5"
              x2="768"
              y2="0.5"
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
          height="768"
          viewBox="0 0 1 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 left-[16%]"
        >
          <line
            y1="-0.195"
            x2="768"
            y2="-0.195"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0 768)"
            stroke="url(#paint0_linear_1_2548)"
            strokeWidth="0.39"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2548"
              x1="768"
              y1="0.00576581"
              x2="0"
              y2="3.27884e-07"
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
          height="768"
          viewBox="0 0 1 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 left-[35%]"
        >
          <line
            y1="-0.195"
            x2="768"
            y2="-0.195"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0 768)"
            stroke="#5C6F67"
            strokeWidth="0.39"
          />
        </svg>
      </>
      <Image
        src="/images/3D-Lines.png"
        alt="3d background"
        width={2160}
        height={569}
        className="absolute left-0 top-0 opacity-15"
      />
      <div className="grid place-items-center space-y-4 my-8">
        <Image
          src="/images/bulb-icon.png"
          alt="bulb icon"
          height={80}
          width={80}
        />
        <h2 className="text-4xl text-[#E7C481] font-bold">
          Never ending <br /> energy solutions
        </h2>
        <p className="text-[#C0A36C]">
          Offering affordable alternate energy solutions to meet every user
          needs
        </p>
      </div>
      <div className="grid grid-cols-3 space-x-4 relative z-20">
        <div className="grid space-y-4">
          <div className="pt-8 pb-6 px-4 rounded-[2rem] bg-[#485346] flex gap-4">
            <article className="grid space-y-4">
              <h3 className="text-xl self-end font-bold text-[#E7C481]">
                Reliable Battery Solutions
              </h3>
              <p className="text-[#A1B99B]">
                Safe, Sustainable, and Built to Last Through Constant Charging
                and recharging
              </p>
            </article>
            <Draulics />
          </div>
          <div className="grid place-items-center pb-4 px-4 rounded-[2rem] bg-[#485346] gap-4">
            <NuclearStation />
            <article className="grid space-y-2 px-8">
              <h3 className="text-xl font-bold text-[#E7C481]">
                Harness Earth&apos;s Heat With Geothermal Solutions
              </h3>
              <p className="text-[#A1B99B]">
                Unlock affordable sustainability with our geothermal
                solutions—tapping into Earth&apos;s heat for reliable,
                eco-friendly energy. Go green effortlessly.
              </p>
            </article>
          </div>
        </div>
        <div className="flex flex-col pb-4 items-start gap-8 rounded-[2rem] bg-[#485346]">
          <SolarPanel />
          <article className="grid space-y-4 px-8">
            <h3 className="text-xl font-bold text-[#E7C481]">
              The power of the sun in palm of your hands
            </h3>
            <p className="text-[#A1B99B]">
              Experience limitless energy with our affordable solar solutions.
              Harness the sun&apos;s power effortlessly, empowering you towards
              a sustainable future. Illuminating your footprint
            </p>
          </article>
        </div>
        <div className="grid space-y-4">
          <div className="grid place-items-center pb-4 px-4 rounded-[2rem] bg-[#485346]  gap-4">
            <Hydroplant />
            <article className="grid space-y-2 px-8">
              <h3 className="text-xl font-bold text-[#E7C481]">
                Empower Your Community: Hydropower from your rivers
              </h3>
              <p className="text-[#A1B99B]">
                Drive community empowerment with our small dam hydropower
                solutions—harnessing nature&apos;s force for affordable and
                sustainable energy independence.
              </p>
            </article>
          </div>
          <div className="pt-8 pb-6 px-4 rounded-[2rem] bg-[#485346] flex gap-4">
            <article className="grid space-y-4">
              <h3 className="text-xl self-end font-bold text-[#E7C481]">
                Reliable Battery Solutions
              </h3>
              <p className="text-[#A1B99B]">
                Safe, Sustainable, and Built to Last Through Constant Charging
                and recharging
              </p>
            </article>
            <Fan />
          </div>
        </div>
      </div>
      <>
        <svg
          width="1"
          height="768"
          viewBox="0 0 1 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-[35%] -top-5 absolute"
        >
          <line
            y1="-0.195"
            x2="768"
            y2="-0.195"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0 768)"
            stroke="#5C6F67"
            strokeWidth="0.39"
          />
        </svg>

        <svg
          width="1"
          height="768"
          viewBox="0 0 1 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 right-[16%]"
        >
          <line
            y1="-0.195"
            x2="768"
            y2="-0.195"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0 768)"
            stroke="url(#paint0_linear_1_2545)"
            strokeWidth="0.39"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2545"
              x1="0"
              y1="0.5"
              x2="768"
              y2="0.5"
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
          height="768"
          viewBox="0 0 1 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 right-[6%]"
        >
          <line
            y1="-0.195"
            x2="768"
            y2="-0.195"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0 768)"
            stroke="url(#paint0_linear_1_2544)"
            strokeWidth="0.39"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2544"
              x1="0"
              y1="0.5"
              x2="768"
              y2="0.5"
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

// background: radial-gradient(442.73% 94.88% at 50% 68.6%, rgba(0, 0, 0, 0.7) 20.3%, rgba(0, 0, 0, 0) 100%), rgba(236, 254, 217, 0.25);

// background: #FBD943;
// box-shadow: 0px 0px 116.7px #FCE788, 0px 103px 115.4px rgba(255, 255, 255, 0.95), inset 0px 0px 114.8px #FEF6D7;
