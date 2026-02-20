import { Project, Milestone, Skill, TeamMember } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Tahosin Abir Shanto ',
    role: 'Lead Architect & Marketing Head',
    specialty: 'Front-end & WebGL & Motion Design',
    bio: 'Ex-M.E.H. engineer specialized in high-concurrency systems and distributed databases.',
    imageUrl: 'https://fcfqmuluqxqapccffkzj.supabase.co/storage/v1/object/public/products/abit.jpg',
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
    name: 'Nuru Mia',
    role: 'AI Research Lead & Lead Designer',
    specialty: 'UI/UX Design',
    bio: 'Award-winning designer merging mathematics with aesthetics to create immersive 3D web experiences.',
    imageUrl: 'https://i.pinimg.com/736x/6c/26/51/6c2651d375771b41028e41a4c231519a.jpg',
    portfolioUrl: '',
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
