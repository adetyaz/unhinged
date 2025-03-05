import { AtomBuilding } from "../ui/atom-building";
import { AtomEnergy } from "../ui/atom-energy";
// import { AtomOutframe } from "../ui/atom-outframe";
import { AtomFan } from "../ui/atom-fan";
import { AtomHydraulic } from "../ui/atom-hydraulic";
import { AtomNuclear } from "../ui/atom-nuclear";
import { AtomShadow } from "../ui/atom-shadow";
import { SunGlow } from "../ui/sun-glow";
import { AtomPanel } from "../ui/atom-panel";
// import { AtomicInframe } from "../ui/atomic-inframe";
// import Image from "next/image";

export const Energy = () => {
  return (
    <section className="grid space-y-4 justify-center items-center text-center bg-emerald-700 ">
      <h2 className="text-4xl text-[#E7C481]">
        Energy: <br />
        Down to the Atom
      </h2>
      <p className="text-[#C0A36C]">Delivering the minutest spark of energy</p>
      <div className="relative grid place-items-center bg-cyan-600">
        <>
          <SunGlow />
          <AtomEnergy />
          <AtomShadow />
        </>

        {/* <AtomOutframe /> */}
        {/* <Image
          src="/images/out-frame.png"
          height={700}
          width={900}
          alt="atom frame"
          className="absolute left-1/2 -translate-x-1/2 top-32 h-[50rem] w-[60rem]"
        /> */}
        {/* <AtomicInframe /> */}
        <AtomHydraulic />
        <AtomPanel />
        <AtomFan />
        <AtomNuclear />
        <AtomBuilding />
      </div>
    </section>
  );
};
