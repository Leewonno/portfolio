"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-line-inner", {
        yPercent: 110,
        duration: 1,
        ease: "power.out",
        stagger: 0.3,
      });

      gsap.fromTo(
        ".hero-box",
        { y: -400, rotation: 45, opacity: 0 },
        {
          y: 0,
          rotation: 405,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.2,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 relative">
      <div className="overflow-hidden mb-10">
        <h1 className="hero-line-inner text-8xl font-bold text-gray-800 tracking-tight">
          이원노
        </h1>
      </div>
      <div className="overflow-hidden">
        <h1 className="hero-line-inner text-2xl font-semibold text-gray-700">
          흐름이 끊기지 않는 웹을 개발합니다.
        </h1>
      </div>
      <div className="overflow-hidden">
        <p className="hero-line-inner flex flex-col text-gray-600">
          <span>
            2년간 ERP 서비스를 개발하며 복잡한 업무를 화면에 풀어왔습니다.
          </span>
          <span>사용자가 헤매지 않고 이해하기 쉬운 흐름을 만듭니다.</span>
        </p>
      </div>
      <div className="hero-box rounded-xl opacity-0 bg-gray-100/50 h-32 w-32 absolute right-0 top-0"></div>
      <div className="hero-box rounded-xl opacity-0 bg-gray-100/50 h-32 w-32 absolute right-0 top-16"></div>
    </div>
  );
}
