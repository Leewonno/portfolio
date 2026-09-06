export interface CaseStudy {
  title: string;
  issue: string;
  solve: string;
  result: string;
}

export interface Project {
  key: string;
  name: string;
  subtitle: string;
  description: string;
  works: WorkItem[];
  techStack: string[];
  caseStudies: CaseStudy[];
  link?: string;
  github?: string;
  videos?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  works: string[];
}

export interface WorkItem {
  importance?: "high" | "other";
  content: string;
}

export type SkillCategory = "Frontend" | "Language" | "Backend" | "Etc";

export interface SkillGroup {
  category: SkillCategory;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
  courses?: string[];
}
