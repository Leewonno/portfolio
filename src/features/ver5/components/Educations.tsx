"use client";

import { EDUCATIONS } from "../model/data";
import { CardButton } from "./common/CardButton";
import { Title } from "./common/Title";

export function Educations() {
  return (
    <div className="overflow-hidden">
      <div className="section-reveal w-full flex flex-col gap-4 relative opacity-0">
        <Title>Education</Title>
        {EDUCATIONS.map((education) => (
          <CardButton
            key={education.school}
            title={education.school}
            desc={education.period}
            subtitle={education.degree}
            // onClick={() => modal.open(education)}
          />
        ))}
      </div>
    </div>
  );
}
