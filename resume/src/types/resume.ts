export interface ProjectIsland {
    id: string;
    name: string;
    description: string;
    techStack: string[];
    appStoreLink?: string;
    websiteLink?: string;
    youtubeLink?: string;

    position: { x: number; y: number };
    islandType: 'volcano' | 'forest' | 'lighthouse' | 'ruins';
}