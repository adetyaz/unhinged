"use client";
import { Energy, Features, Hero, Nav } from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", () => setPageWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setPageWidth(window.innerWidth)
      );
  }, []);

  return (
    <main
      className="pt-4
   bg-[#0C100F]
    relative"
    >
      <div className="px-24">
        <Nav />
        <Hero />
        <Energy />
      </div>
      <Features />

      <div className="px-24"></div>
      {pageWidth && (
        <div className="bg-transparent text-transparent py-4 px-12 rounded-full fixed left-12 top-32">
          {pageWidth}
        </div>
      )}
    </main>
  );
}
