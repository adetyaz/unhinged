"use client";
import { Energy, Hero, Nav } from "@/components";
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
    <main className="h-dvh sm:min-h-screen w-screen pt-4 px-24 bg-[#0C100F] relative">
      <div>
        <Nav />
        <Hero />
        <Energy />
      </div>
      {pageWidth && (
        <div className="bg-transparent text-transparent py-4 px-12 rounded-full fixed left-12 top-32">
          {pageWidth}
        </div>
      )}
    </main>
  );
}
