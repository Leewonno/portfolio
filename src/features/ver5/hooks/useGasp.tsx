"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useGasp() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".hero-line-inner", { opacity: 0, yPercent: 110 });
      gsap.set(".hero-box", { opacity: 0, y: -400, rotation: 45 });
      gsap.set(".section-reveal", { opacity: 0, y: 40 });

      const intro = gsap.timeline({ paused: true });

      intro.to(".hero-line-inner", {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        stagger: 0.3,
      });

      // 텍스트가 다 올라오는 시점. 아래 섹션은 여기까지만 기다린다.
      const linesEnd = intro.duration();

      intro.to(
        ".hero-box",
        {
          opacity: 1,
          y: 0,
          rotation: 405,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.6",
      );

      // Hero도 뷰포트에 들어와야 재생.
      // 맨 아래에서 새로고침하면 시작 자체를 안 하므로 아래 섹션이 기다릴 일이 없다.
      let introStarted = false;
      ScrollTrigger.create({
        trigger: ".hero-root",
        start: "top bottom",
        end: "bottom top",
        onEnter: startIntro,
        onEnterBack: startIntro,
      });

      function startIntro() {
        if (introStarted) return;
        introStarted = true;
        intro.play();
      }

      ScrollTrigger.batch(".section-reveal", {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            overwrite: true,
            // Hero 인트로가 지금 재생 중일 때만 이어서 시작한다.
            // 화면 밖이라 재생되지 않았거나 이미 끝났으면 즉시 재생.
            delay: intro.isActive() ? Math.max(0, linesEnd - intro.time()) : 0,
          }),
      });
    },
    { scope: containerRef },
  );

  return containerRef;
}
