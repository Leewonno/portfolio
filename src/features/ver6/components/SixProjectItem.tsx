"use client";

import { useState } from "react";
import type { Project } from "../model/types";
import { SixHorizontalLine } from "./SixHorizontalLine";

function ItemAccordion({
  item,
  isOpen,
  onClick,
}: {
  item: Project;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="cursor-pointer flex justify-between items-center text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
        onClick={onClick}
      >
        <div className="text-2xl">{item.name}</div>
        <div className="text-xs">{item.subtitle}</div>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-2 text-sm text-neutral-400">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemToggleIcon({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="absolute top-2 -left-15 cursor-pointer w-4 h-4"
      onClick={onClick}
      aria-label="프로젝트 토클 버튼"
    >
      <div className="w-full h-px bg-neutral-200"></div>
      <div
        className={`w-full h-px bg-neutral-200 transition-[transform, opacity] duration-200 ${isOpen ? "rotate-0 opacity-0" : "rotate-90 opacity-100"}`}
      ></div>
    </button>
  );
}

export function SixProjectItem({ item }: { item: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-4">
      <ItemToggleIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <ItemAccordion
        item={item}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <SixHorizontalLine />
    </div>
  );
}
