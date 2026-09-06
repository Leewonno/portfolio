import { PROJECTS } from "../model/data";
import { SixLeftBox } from "./SixLeftBox";
import { SixProjectItem } from "./SixProjectItem";
import { SixRightBox } from "./SixRightBox";
import { SixSectionContainer } from "./SixSectionContainer";
import { SixTitle } from "./SixTitle";

export function SixProjects() {
  return (
    <SixSectionContainer>
      <SixLeftBox>
        <SixTitle>Projects</SixTitle>
      </SixLeftBox>
      <SixRightBox>
        <div className="text-neutral-200 flex flex-col gap-8">
          {PROJECTS.map((project) => (
            <SixProjectItem key={project.key} item={project} />
          ))}
        </div>
      </SixRightBox>
    </SixSectionContainer>
  );
}
