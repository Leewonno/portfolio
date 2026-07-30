"use client";

import { Experiences } from "./Experiences";
import { End } from "./End";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { useGasp } from "../hooks/useGasp";

export function PageContainer() {
  const containerRef = useGasp();

  return (
    <div
      ref={containerRef}
      className="w-full sm:w-170 flex flex-col gap-20 sm:gap-30"
    >
      <Hero />
      <Projects />
      <Experiences />
      <End />
    </div>
  );
}
