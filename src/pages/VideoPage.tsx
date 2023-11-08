import Video from "../components/Video";
import { useParams } from "react-router-dom";
import { getRelatedVideos } from "../services/videoServices";
import { getVideoById } from "../services/videoServices";
import { VideoPreview } from "../components/VideoPreview";

const VideoPage = () => {
  const { id } = useParams();

  const videoObject = getVideoById(id || "");

  return (
    <div className="bg-[#0F0F0F]">
      <div className="sm:p-6 flex gap-8 flex-col sm:flex-row p-0">
        <div className="w-[100%] sm:w-[66%] xl:w-[60%] flex flex-col gap-4">
          {videoObject && <Video video={videoObject} />}
          <div>
            <div className="gap-2 flex flex-col pb-4">
                <h1 className="text-2xl font-bold text-white">{videoObject?.title}</h1>
                <div className="flex gap-4 items-center">
                    <img src={`/${videoObject?.user.avatar}`} alt="user" className="w-10 h-10 rounded-full object-cover" />
                    <h2 className="text-white">{videoObject?.user.name}</h2>
                </div>
            </div>

            <div className="bg-[#272727] p-4 bg-opacity-50 text-white rounded-lg hover:bg-[#3F3F3F] transition-all duration-100 ease-in-out cursor-pointer">
              <p>{videoObject?.user.name}</p>
            </div>
          </div>
        </div>

        <div className="w-[100%] sm:w-[33%] xl:w-[40%] flex flex-col gap-4">
          {getRelatedVideos(id || "").map((videoObject) => {
            return (
              <VideoPreview video={videoObject} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
