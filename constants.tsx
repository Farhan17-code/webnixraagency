import { Project, Milestone, Skill, TeamMember } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Tahosin Abir Shanto ',
    role: 'Lead Architect & Marketing Head',
    specialty: 'Front-end & WebGL & Motion Design',
    bio: 'Ex-M.E.H. engineer specialized in high-concurrency systems and distributed databases.',
    imageUrl: 'https://scontent.fdac185-1.fna.fbcdn.net/v/t39.30808-1/495965890_122175980726320300_3963179257449800831_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Pln6zcgX9ncQ7kNvwEwD6JC&_nc_oc=AdklxtaJiSNFWk2ClRiGZgV5oaYeLPcOUJxJLMqxoJfZHmIGFE7GkR5Fxdj0aKrKyqA&_nc_zt=24&_nc_ht=scontent.fdac185-1.fna&_nc_gid=h3514YEXkelNr1HRZ4016w&oh=00_AfvpIxZsyKANk9osfn0N2_RceyTJBFQpKr8nW2Hrzqfa8A&oe=6998F5B8',
    portfolioUrl: '#',
    github: '#',
    linkedin: '#'
  },
  {
    id: 'm2',
    name: 'Farhan Islam Shrobon',
    role: 'Creative Director & Lead Programmer',
    specialty: 'Full Stack & LLMs & Neural Nets',
    bio: 'Pioneering the integration of generative AI into production-ready enterprise applications.',
    imageUrl: 'https://elmlfaxrtgrlgzeqiynp.supabase.co/storage/v1/object/public/products/F3.jpeg',
    portfolioUrl: 'https://www.farhan-islam.org/',
    github: 'https://github.com/creepyphantom11y-gif',
    linkedin: '#'
  },
  {
    id: 'm3',
    name: 'Mia Khalifa',
    role: 'AI Research Lead & Lead Designer',
    specialty: 'UI/UX Design',
    bio: 'Award-winning designer merging mathematics with aesthetics to create immersive 3D web experiences.',
    imageUrl: 'https://imgs.search.brave.com/izSzfwHXonABnKNscvX3us3u0omiJyPnafaxA4EIP1o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zYW50/YWJhbnRhLmNvbS9n/YWxsZXJ5L0dsb2Jh/bCUyMENlbGVicml0/aWVzKEYpL01pYSUy/MEtoYWxpZmEvTWlh/LUtoYWxpZmEtNS12/LmpwZw',
    portfolioUrl: 'https://en.wikipedia.org/wiki/Mia_Khalifa',
    github: '#',
    linkedin: '#'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Phantom Wears',
    description: 'A full-stack e-commerce platform for selling fashion accessories.',
    tags: ['React', 'Three.js', 'Node.js', 'supabase'],
    imageUrl: 'https://elmlfaxrtgrlgzeqiynp.supabase.co/storage/v1/object/public/products/Screenshot%202026-02-10%20135455.png',
    link: '#',
    github: '#',
    leadMemberId: 'm1'
  },
  {
    id: '2',
    title: 'Lumina Luxe',
    description: 'A full-stack e-commerce platform for selling fashion accessories.',
    tags: ['Next.js', 'React', 'Tailwind', 'Node.js'],
    imageUrl: 'https://elmlfaxrtgrlgzeqiynp.supabase.co/storage/v1/object/public/products/Screenshot%202026-02-10%20134743.png',
    link: '#',
    github: '#',
    leadMemberId: 'm3'
  },
  {
    id: '3',
    title: 'Vortex Vibe',
    description: 'High-performance headless commerce engine with a custom 3D product customizer.',
    tags: ['Shopify', 'Three.js', 'Typescript'],
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
    github: '#',
    leadMemberId: 'm2'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'ms1',
    year: '2024',
    title: 'Series A Partnership',
    description: 'Partnered with Global Dynamics to build the next generation of spatial computing interfaces.'
  },
  {
    id: 'ms2',
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized by the Webby Awards for groundbreaking integration of LLMs in creative tools.'
  },
  {
    id: 'ms3',
    year: '2022',
    title: 'Studio Foundation',
    description: 'Nexus Collective formed by a group of senior engineers from FAANG and high-growth startups.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Distributed Systems', category: 'Backend', level: 98 },
  { name: 'WebGL / WebGPU', category: 'Frontend', level: 95 },
  { name: 'Generative AI', category: 'AI', level: 92 },
  { name: 'Cloud Architecture', category: 'Tools', level: 94 },
  { name: 'Visual Storytelling', category: 'Design', level: 90 }
];

export const TEAM_BIO = "Webnixra is an elite multidisciplinary collective of engineers, designers, and AI researchers. We don't just build websites; we architect digital dimensions that push the boundaries of what's possible on the open web.";
