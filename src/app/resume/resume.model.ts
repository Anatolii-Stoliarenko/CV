export interface WorkExperience {
  id: string; // Unique identifier for the experience entry
  startDate: string; // Start date of the work experience
  endDate?: string; // End date of the work experience (optional if currently employed)
  jobTitle: string; // Job title held during the experience
  companyName: string; // Name of the company
  location: string; // Location of the company
  description: string; // Detailed description of responsibilities and achievements
}

export interface Education {
  id: string;
  startDate: string; // Start date of the education
  endDate?: string; // End date of the education (optional if currently enrolled)
  title: string;
  institution: string;
  location: string;
  description: string;
  degree: string;
}

export interface Skill {
  id: string;
  title: string; // The specific skill: 'English - B2', 'Communication', 'HTML'
}

export interface SkillCategory {
  title: string; // The category: 'languages', 'technologies', 'skills'
  skills: Skill[];
}
