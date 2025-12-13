export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
