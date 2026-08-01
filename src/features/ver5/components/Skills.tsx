"use client";

import { SKILLS } from "../model/data";
import { Title } from "./common/Title";

export function Skills() {
  return (
    <div className="overflow-hidden">
      <div className="section-reveal w-full flex flex-col gap-4 relative opacity-0">
        <Title>Skills</Title>
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-6"
          >
            <span className="shrink-0 sm:w-24 sm:mt-1.5 text-xs text-gray-400 tracking-widest uppercase">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
