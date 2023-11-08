import { videoObjects } from "../data";

export const getRelatedVideos = (videoId: string) => {
  return videoObjects.filter((video) => video.id !== videoId);
};

export const getVideoById = (videoId: string) => {
  return videoObjects.find((video) => video.id === videoId);
};
