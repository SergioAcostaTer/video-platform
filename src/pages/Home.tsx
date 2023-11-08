import { videoObjects } from "../data";
import { VideoPreview } from "../components/VideoPreview";

export const Home = () => {
  return (
    <>
      <div className="sm:p-8 flex gap-8 flex-col sm:flex-row p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videoObjects.map((videoObject) => {
          return (
            <VideoPreview video={videoObject} />
          );
        })}
      </div>
    </>
  );
};
