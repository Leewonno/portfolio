"use client";

import { useModal } from "../hooks/useModal";
import { PROJECTS } from "../model/data";
import type { Project } from "../model/types";
import { CardButton } from "./common/CardButton";
import { Modal } from "./common/Modal";
import { ProjectContent } from "./common/ProjectContent";
import { Title } from "./common/Title";

export function Projects() {
  const modal = useModal<Project>();

  return (
    <div className="overflow-hidden">
      <div className="section-reveal w-full flex flex-col gap-4 relative opacity-0">
        <Title>Projects</Title>
        {PROJECTS.map((project) => (
          <CardButton
            key={project.name}
            title={project.name}
            desc={project.subtitle}
            onClick={() => modal.open(project)}
          />
        ))}
      </div>

      <Modal
        open={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        title={modal.selected?.name}
        link={modal.selected?.link}
        github={modal.selected?.github}
        videos={modal.selected?.videos}
      >
        {modal.selected && <ProjectContent project={modal.selected} />}
      </Modal>
    </div>
  );
}
