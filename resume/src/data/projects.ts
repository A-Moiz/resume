import type { ProjectIsland } from "../types/resume";

export const myProjects: ProjectIsland[] = [
    {
        id: "List It",
        name: "Lit It",
        description: "A cross-platform to-do and note-taking app with real-time syncing and 0 crashes.",
        techStack: ["Swift", "SwiftUI", "MVVM", "React", "TypeScript", "Supabase"],
        appStoreLink: "https://apps.apple.com/gb/app/list-it-organise-everything/id6746731233",
        websiteLink: "https://list-it-dom.netlify.app/landingpage",
        position: { x: 300, y: 500 },
        islandType: "lighthouse",
    },
    {
        id: "RevuLink",
        name: "RevuLink",
        description: "#1 NFC & QR Review Solution",
        techStack: ["Swift", "SwiftUI"],
        appStoreLink: "https://apps.apple.com/gb/app/revulink/id6745518061",
        websiteLink: "https://revulink.net/?srsltid=AfmBOoplDfebBMgidmhiWDLbYS-MvAvDVY23L6nTyVGxqKOy8fvRwD8u",
        position: { x: 600, y: 450 },
        islandType: "volcano",
    },
    {
        id: "Canvas Connect",
        name: "Canvas Connect",
        description: "Social media hub for artists featuring automatic watermarks and Firebase integration.",
        techStack: ["Swift", "SwiftUI", "Firebase"],
        youtubeLink: "https://www.youtube.com/watch?v=nEcVoVNeVX8",
        position: { x: 150, y: 250 },
        islandType: "forest",
    },
    {
        id: "OPBR Companion",
        name: "OPBR Companion",
        description: "Companion app for the popular Mobile/PC game Bounty Rush",
        techStack: ["Swift", "SwiftUI", "React", "TypeScript", "Supabase"],
        appStoreLink: "https://apps.apple.com/gb/app/opbr-companion/id6737994116",
        websiteLink: "https://opbr-companion.netlify.app",
        position: { x: 450, y: 200 },
        islandType: "lighthouse",
    },
];