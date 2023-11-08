export type VideoObject = {
    src: string;
    title: string;
    id: string;
    duration: number;
    views: number;
    user: {
        name: string;
        avatar: string;
    };
    tags: string[];
};



export const videoObjects: VideoObject[] = [
    {
        src: "https://sergioacostadev.com/media/1.mp4",
        title: "Dani Acosta - Anhelo",
        id: "1",
        duration: 360,
        views: 5000,
        user: {
            name: "Sergio Acosta",
            avatar: "sergio.jpeg",
        },
        tags: ["music", "dani acosta", "anhelo"],
    },
    {
        src: "https://sergioacostadev.com/media/2.mp4",
        title: "Ferxxo 30 - Feid",
        id: "2",
        duration: 720,
        views: 10000,
        user: {
            name: "Sergio Acosta",
            avatar: "sergio.jpeg",
        },
        tags: ["music", "feid", "ferxxo 30"],
    },
    {
        src: "https://sergioacostadev.com/media/3.mp4",
        title: "Tame Impala - Borderline",
        id: "3",
        duration: 240,
        views: 7500,
        user: {
            name: "Sergio Acosta",
            avatar: "sergio.jpeg",
        },
        tags: ["music", "tame impala", "borderline"],
    },
    {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title: "Big Buck Bunny",
        id: "4",
        duration: 360,
        views: 5000,
        user: {
            name: "Sergio Acosta",
            avatar: "sergio.jpeg",
        },
        tags: ["animation", "bunny"],
    }
];
