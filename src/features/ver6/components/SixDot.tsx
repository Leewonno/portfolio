"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SixDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dot = dotRef.current;
    const inner = innerRef.current;
    const track = dot?.offsetParent as HTMLElement | null;
    if (!dot || !inner || !track) return;

    gsap.to(dot, {
      y: () => {
        const gap = dot.offsetTop + inner.offsetTop;
        return Math.max(0, track.clientHeight - gap * 2 - inner.offsetHeight);
      },
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div ref={dotRef} className="w-full absolute top-12">
      <div
        ref={innerRef}
        className="w-2 h-2 bg-blue-300 absolute left-[calc(30%-4px)]"
      />
    </div>
  );
}
