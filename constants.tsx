
import { Project, Skill, NavItem } from './types';

export const EXPERIENCE = [
  {
    role: 'Office Assistant',
    company: 'Holy Cross of Davao College',
    period: '2023 - Present',
  },
  {
    role: 'Creative Developer',
    company: 'Freelance',
    period: '2023 - Present',
  },
  {
    role: 'Customer Service Representative',
    company: 'Part-time',
    period: '2022 - 2023',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'AmariPOS',
    title: 'Amari Point of Sale wit Inventory Management System',
    description: 'A modern e-commerce solution with seamless checkout and inventory management.',
    image: 'https://v1.screenshot.11ty.dev/https%3A%2F%2Famari-pos-with-inventory-management.vercel.app%2F/opengraph/',
    tags: ['TypeScript', 'Supabase', 'Next.js'],
    liveUrl: 'https://amari-pos-with-inventory-management.vercel.app/',
  },
  {
    id: 'arche',
    title: 'Arche Interior Design',
    description: 'A sophisticated interior design showcase platform featuring modern layouts and elegant design elements.',
    image: 'https://v1.screenshot.11ty.dev/https%3A%2F%2Farche-interior-design.vercel.app%2F/opengraph/',
    tags: [ 'UI/UX', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://arche-interior-design.vercel.app/',
  },
  {
    id: 'cloudnotepad',
    title: 'Cloud Notepad',
    description: 'A simple cloud-based notepad app for saving and syncing notes across devices to Github.',
    image: 'https://v1.screenshot.11ty.dev/https%3A%2F%2Fdlwlrmwa-cloudnotepad.vercel.app%2F/opengraph/',
    tags: ['TypeScript', 'React', 'Vite'],
    liveUrl: 'https://dlwlrmwa-cloudnotepad.vercel.app/',
  },
  {
    id: 'lumiere',
    title: 'Lumiere Room Rentals',
    description: 'A modern room rental platform with seamless booking experience and property management features.',
    image: 'https://v1.screenshot.11ty.dev/https%3A%2F%2Flumiere-room-rentals.vercel.app%2F/opengraph/',
    tags: ['UI/UX', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lumiere-room-rentals.vercel.app/',
  },
];

export const TECH_STACK = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Tailwind CSS', 'Vite', 'Figma'],
  backend: ['PHP', 'Laravel', 'Python', 'Node.js', 'MySQL', 'PostgreSQL', 'Supabase'],
  tools: ['Git & GitHub', 'WordPress', 'SEO Optimization', 'Google Analytics'],
};


export const CERTIFICATIONS = [
  { name: 'Information Management', provider: 'CodeChum', year: '2025' },
  { name: 'Certificate of Completion', provider: 'Learnovers', year: '2025' },
  { name: 'Intermediate Python', provider: 'DataCamp', year: '2025' },
  { name: 'Data Visualization with Python', provider: 'DataCamp', year: '2025' },
];

// Tech stack logo URLs from devicon CDN
export const TECH_LOGOS: Record<string, string> = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Blade': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  'SEO Optimization': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  'Google Analytics': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
};

