import Image from "next/image";
import { WhiteGlow } from "../ui/white-glow";
import { Tree } from "../ui/tree";

export const Banner = () => {
  return (
    <section className="grid pt-20 place-content-center space-y-4 relative">
      <Image
        src="/images/energy-count.png"
        alt="energy count"
        width={528}
        height={51}
      />
      <h2 className="text-4xl">of energy saved every hour</h2>
      <WhiteGlow />
      <Tree />
    </section>
  );
};
