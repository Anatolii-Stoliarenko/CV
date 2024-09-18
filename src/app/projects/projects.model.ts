export interface Project {
  id: string; // Unique identifier for the project
  title: string; // Title of the project
  description: string; // Detailed description of the project
  imageUrl?: string; // URL to the image associated with the project
  imageBigUrl?: string;
  projectUrl: string; // URL to the project itself
  gitHubUrl: string;
  technology?: string;
  // createdDate?: Date; // Date when the project was created
  // updatedDate?: Date; // Date when the project was last updated
  // status?: 'active' | 'inactive' | 'completed' | 'archived'; // Current status of the project
  // tags?: string[]; // Tags or categories associated with the project
}
