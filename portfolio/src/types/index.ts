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

export interface SharingItem {
  id: string;
  title: string;
  description: string;
  platform: string;
  url: string;
  date: string; // ISO format: "2024-11-14"
}

export interface ProfileLink {
  id: string;
  label: string;
  labelMobile: string;
  url: string;
  icon: 'medium' | 'notion' | 'linkedin' | 'github';
}

export interface SharingData {
  profileLinks: ProfileLink[];
  items: SharingItem[];
}

// Legacy type alias for backward compatibility
export type SharingContent = SharingItem;

// Work experience types
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null; // null for current position
  shortDate: string; // e.g., "2022 – Present"
  points: string[]; // bullet points for accomplishments
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
