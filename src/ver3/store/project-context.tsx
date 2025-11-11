import { createContext, ReactNode, useState } from "react";
import { ProjectKeyType } from "../interface/project";




interface ProjectContextType {
  project: ProjectKeyType;
  setProject: React.Dispatch<React.SetStateAction<ProjectKeyType>>;
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext<ProjectContextType>({
  project: "mylog",
  setProject: () => { },
});

export function ProjectProvider({ children }: ProjectProviderProps) {
  const [project, setProject] = useState<ProjectKeyType>("mylog");

  return <ProjectContext.Provider value={{
    project, setProject,
  }}>
    {children}
  </ProjectContext.Provider>
}

export default ProjectContext;