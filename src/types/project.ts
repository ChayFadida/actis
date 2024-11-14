export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export interface Project extends Repository {
  featured: boolean;
  image?: string;
  demo_url?: string;
} 