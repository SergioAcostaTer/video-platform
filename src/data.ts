export type VideoObject = {
  src: string;
  title: string;
  id: string;
  duration: number;
  user: {
    name: string;
    avatar: string;
  };
  tags: string[];
  thumbnail: string;
};

export const videoObjects: VideoObject[] = [
  {
    src: "https://sergioacostadev.com/media/tedb30es.mp4",
    title: "Ichika Nito being Ichika Nito",
    id: "tedb30es",
    duration: 61.1,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["guitar", "ichika", "nito", "music"],
    thumbnail: "https://sergioacostadev.com/media/tedb30es.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/oqdqli69.mp4",
    title: "Anhelo - Dani Acosta (Audio Oficial)",
    id: "oqdqli69",
    duration: 149.68,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "music", "dani acosta", "anhelo"],
    thumbnail: "https://sergioacostadev.com/media/oqdqli69.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/xsk920fl.mp4",
    title: "Dani Acosta - Relajao'",
    id: "xsk920fl",
    duration: 149.049,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "music", "dani acosta", "relajao", "relajao'"],
    thumbnail: "https://sergioacostadev.com/media/xsk920fl.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/f6w6n4mw.mp4",
    title: "Dani Acosta, Sunikens - Fugaz (Full EP Visualizer)",
    id: "f6w6n4mw",
    duration: 435,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "sunikens", "music", "dani acosta", "fugaz"],
    thumbnail: "https://sergioacostadev.com/media/f6w6n4mw.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/82wnael3.mp4",
    title: "Dani Acosta, Sunikens - Infidelidad",
    id: "82wnael3",
    duration: 157.209,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "sunikens", "music", "dani acosta", "infidelidad"],
    thumbnail: "https://sergioacostadev.com/media/82wnael3.jpg",
  },
];
