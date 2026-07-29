import type { Experience } from "../../model/types";

interface ExperienceContentProps {
  experience: Experience;
}

export function ExperienceContent({ experience }: ExperienceContentProps) {
  return (
    <>
      {/* 요약 */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {experience.summary}
      </p>

      {/* 메타 정보 */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 text-sm">
          <span className="text-gray-400 w-14 shrink-0">역할</span>
          <span className="text-gray-700">{experience.role}</span>
        </div>
        <div className="flex gap-3 text-sm">
          <span className="text-gray-400 w-14 shrink-0">기간</span>
          <span className="text-gray-700">{experience.period}</span>
        </div>
      </div>

      {/* 담당 업무 */}
      {experience.works.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Works
          </span>
          <ul className="flex flex-col gap-2 pl-5 list-disc list-outside marker:text-gray-300">
            {experience.works.map((work) => (
              <li key={work} className="text-sm text-gray-600">
                <span>{work}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
