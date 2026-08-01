"use client";

import { Experiences } from "./Experiences";
import { End } from "./End";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { useGasp } from "../hooks/useGasp";
import { Educations } from "./Educations";

export function PageContainer() {
  const containerRef = useGasp();

  return (
    <div
      ref={containerRef}
      className="w-full sm:w-170 flex flex-col gap-25 sm:gap-35"
    >
      <Hero />
      <Projects />
      <Experiences />
      {/* <Skills /> */}
      <Educations />
      <End />
    </div>
  );
}
