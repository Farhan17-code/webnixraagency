export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  portfolioUrl?: string;
  github?: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  github?: string;
  leadMemberId?: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI' | 'Design';
  level: number;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
