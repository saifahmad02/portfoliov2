// Profile data types
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  headline: string;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
  mediumUrl?: string;
  notionUrl?: string;
}

// Sharing content types
export type PlatformType = "Medium" | "Notion" | "LinkedIn" | "General";

export interface SharingContent {
  id: string;
  title: string;
  platform: PlatformType;
  date: string;
  description: string;
  url: string;
}

// Work experience types
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null; // null for current position
  description: string;
  technologies: string[];
}

// Project types
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
}
