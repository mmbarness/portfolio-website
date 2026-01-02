export interface Resume {
  basics: Basics;
  work: Work[];
  education: Education[];
  skills: Skill[];
  projects?: Project[];
}

export interface Basics {
  name: string;
  label: string;
  email: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: {
    city: string;
    region: string;
  };
  profiles: Profile[];
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
}

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Project {
  name: string;
  description: string;
  company?: string;
  companyUrl?: string;
  url?: string;
  repo?: string;
  status?: string;
  highlights?: string[];
  keywords?: string[];
}
