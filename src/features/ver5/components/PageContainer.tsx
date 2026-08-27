"use client";

import { Experiences } from "./Experiences";
import { End } from "./End";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { useGasp } from "../hooks/useGasp";
import { Educations } from "./Educations";
import { FooterVer5 } from "@/features/nav/FooterVer5";

export function PageContainer() {
  const containerRef = useGasp();

  return (
    <div
      ref={containerRef}
      className="w-full sm:w-170 flex flex-col gap-25 sm:gap-35 px-8 pt-30 sm:px-0 sm:pt-40"
    >
      <Hero />
      <Projects />
      <Experiences />
      {/* <Skills /> */}
      <Educations />
      <End />
      <FooterVer5 />
    </div>
  );
}
