import type { CaseStudy, Project } from "../../model/types";
import { Accordion, type AccordionItem } from "./Accordion";

interface ProjectContentProps {
  project: Project;
}

const BADGES = [
  {
    key: "issue",
    label: "문제",
    className: "text-red-500 bg-red-50 border-red-100",
  },
  {
    key: "solve",
    label: "해결",
    className: "text-green-600 bg-green-50 border-green-100",
  },
  {
    key: "result",
    label: "결과",
    className: "text-blue-500 bg-blue-50 border-blue-100",
  },
] as const;

function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-2.5">
      {BADGES.map((badge) => (
        <div
          key={badge.key}
          className="text-sm text-gray-600 leading-relaxed sm:flex sm:items-start"
        >
          <span
            className={`mt-0.5 mr-2 shrink-0 px-2 py-0.5 text-[10px] rounded-full border uppercase ${badge.className}`}
          >
            {badge.label}
          </span>
          <span>{study[badge.key]}</span>
        </div>
      ))}
    </div>
  );
}

function ListItemTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs text-gray-400 tracking-widest uppercase mb-2 mt-2">
      {children}
    </span>
  );
}

export function ProjectContent({ project }: ProjectContentProps) {
  const accordionItems: AccordionItem[] = project.caseStudies.map((study) => ({
    id: study.title,
    trigger: study.title,
    content: <CaseStudyDetail study={study} />,
  }));

  return (
    <>
      {/* 설명 */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* 작업 내용 */}
      {project.works.length > 0 && (
        <div className="flex flex-col gap-2">
          <ListItemTitle>Works</ListItemTitle>
          <ul className="flex flex-col gap-0.5 sm:gap-1.5 pl-5 list-disc list-outside marker:text-gray-300">
            {project.works.map((work) => (
              <li key={work.content} className="text-sm text-gray-600">
                {work.content}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 기술 스택 */}
      {project.techStack.length > 0 && (
        <div className="flex flex-col gap-2">
          <ListItemTitle>Tech Stack</ListItemTitle>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Case Study 아코디언 */}
      {accordionItems.length > 0 && (
        <div className="flex flex-col gap-2">
          <ListItemTitle>Case Study</ListItemTitle>
          <Accordion items={accordionItems} />
        </div>
      )}
    </>
  );
}
