"use client";

import { useGasp } from "../hooks/useGasp";
import { Projects } from "./Projects";
import { Experiences } from "./Experiences";
import { Hero } from "./Hero";
import { End } from "./End";

export function PageContainer() {
  const containerRef = useGasp();

  return (
    <div ref={containerRef} className="w-170 flex flex-col gap-30">
      <Hero />
      <Projects />
      <Experiences />
      <End />
    </div>
  );
}
