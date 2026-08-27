"use client";

import { useEffect, useRef, useState } from "react";

interface VersionItem {
  label: string;
  href: string;
}

const VERSIONS: VersionItem[] = [
  { label: "v1", href: "https://portfolio-67029.web.app/ver1" },
  { label: "v2", href: "https://portfolio-67029.web.app/ver2" },
  { label: "v3", href: "https://portfolio-67029.web.app/" },
  { label: "v4", href: "/ver4" },
];

export function VersionSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<VersionItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const select = (version: VersionItem) => {
    setSelected(version);
    setIsOpen(false);
    window.open(version.href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-white/50">이전 포트폴리오</span>

      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.3)] hover:text-white transition-colors cursor-pointer"
        >
          <span>{selected?.label ?? "선택"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <ul
          aria-label="이전 포트폴리오 버전"
          className={`absolute bottom-full left-0 mb-2 min-w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-[#0a0a14] py-1 shadow-lg transition-all duration-200 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          {VERSIONS.map((version) => (
            <li key={version.label} role="none">
              <button
                type="button"
                role="option"
                aria-selected={selected?.label === version.label}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => select(version)}
                className="w-full px-3 py-1.5 text-left hover:bg-[rgba(255,255,255,0.08)] hover:text-white transition-colors cursor-pointer"
              >
                {version.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
