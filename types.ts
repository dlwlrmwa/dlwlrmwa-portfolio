
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

/**
 * Represents a technical skill with a name, icon, and category.
 * Added 'Design' to categories to support design-related skills like Figma.
 */
export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other' | 'Design';
}

export interface NavItem {
  label: string;
  href: string;
}
