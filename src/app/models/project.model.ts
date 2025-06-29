export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'AI' | 'Web' | 'Data Engineering' | 'Power Platform';
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  stats?: {
    views: number;
    likes: number;
  };
  showFullDescription?: boolean;
  isExpanded?: boolean;
}