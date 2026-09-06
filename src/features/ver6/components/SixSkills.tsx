import { SixHorizontalLine } from "./SixHorizontalLine";
import { SixLeftBox } from "./SixLeftBox";
import { SixRightBox } from "./SixRightBox";
import { SixSectionContainer } from "./SixSectionContainer";
import { SixTitle } from "./SixTitle";

function SkillItemWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4">{children}</div>;
}

function SkillItemTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg text-neutral-400 leading-tight w-25">
        {children}
      </span>
    </div>
  );
}

function SkillItem({ children }: { children: React.ReactNode }) {
  return <span className="text-neutral-400">{children}</span>;
}

function SkillItemList({ skills }: { skills: string[] }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {skills.map((skill) => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </div>
  );
}

export function SixSkills() {
  return (
    <SixSectionContainer>
      <SixLeftBox>
        <SixTitle>Skills</SixTitle>
      </SixLeftBox>
      <SixRightBox>
        <div className="text-neutral-200 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-end">
              <span className="text-4xl font-bold">JavaScript</span>
              <span className="text-xl font-bold">TypeScript</span>
            </div>
            <div className="flex gap-4">
              <span className="text-lg">React</span>
              <span className="text-lg">Next.js</span>
              <span className="text-lg">Vue.js</span>
            </div>
          </div>
          <SixHorizontalLine />
          <div className="flex flex-col gap-4">
            {/* 개발 언어 */}
            <SkillItemWrapper>
              <SkillItemTitle>Language</SkillItemTitle>
              <SkillItemList skills={["JavaScript", "TypeScript", "Python"]} />
            </SkillItemWrapper>
            {/* 프론트엔드 */}
            <SkillItemWrapper>
              <SkillItemTitle>Frontend</SkillItemTitle>
              <SkillItemList
                skills={[
                  "React",
                  "Next.js",
                  "Vue.js",
                  "Electron",
                  "Tailwind CSS",
                  "TanStack Query",
                  "Zustand",
                  "Redux",
                ]}
              />
            </SkillItemWrapper>
            {/* 백엔드 */}
            <SkillItemWrapper>
              <SkillItemTitle>Backend</SkillItemTitle>
              <SkillItemList skills={["Django", "Node.js", "NestJS"]} />
            </SkillItemWrapper>
          </div>
        </div>
      </SixRightBox>
    </SixSectionContainer>
  );
}
