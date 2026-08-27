"use client";

import { useModal } from "../hooks/useModal";
import { EXPERIENCES } from "../model/data";
import type { Experience } from "../model/types";
import { CardButton } from "./common/CardButton";
import { ExperienceContent } from "./common/ExperienceContent";
import { Modal } from "./common/Modal";
import { Title } from "./common/Title";

export function Experiences() {
  const modal = useModal<Experience>();

  return (
    <div className="overflow-hidden">
      <div className="section-reveal w-full flex flex-col gap-4 relative opacity-0">
        <Title>Experience</Title>
        {EXPERIENCES.map((experience) => (
          <CardButton
            key={experience.company}
            title={experience.company}
            desc={experience.period}
            onClick={() => modal.open(experience)}
          />
        ))}
      </div>

      <Modal
        open={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        title={modal.selected?.company}
      >
        {modal.selected && <ExperienceContent experience={modal.selected} />}
      </Modal>
    </div>
  );
}
