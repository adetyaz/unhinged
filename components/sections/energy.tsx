import { AtomBuilding } from "../ui/atom-building";
import { AtomEnergy } from "../ui/atom-energy";
import { AtomFan } from "../ui/atom-fan";
import { AtomHydraulic } from "../ui/atom-hydraulic";
import { AtomNuclear } from "../ui/atom-nuclear";
import { AtomOutframe } from "../ui/atom-outframe";
import { AtomPanel } from "../ui/atom-panel";
import { AtomicInframe } from "../ui/atomic-inframe";

export const Energy = () => {
  return (
    <section className="grid space-y-6 justify-center items-center text-center">
      <h2 className="text-4xl">
        Energy: <br />
        Down to the Atom
      </h2>
      <p>Delivering the minutest spark of energy</p>
      <div className="relative">
        <AtomEnergy />
        <AtomOutframe />
        <AtomicInframe />
        <AtomHydraulic />
        <AtomPanel />
        <AtomFan />
        <AtomNuclear />
        <AtomBuilding />
      </div>
    </section>
  );
};
