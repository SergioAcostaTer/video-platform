import { VideoObject } from "../data";
import { Link } from "react-router-dom";

export const VideoPreview = ({ video }: { video: VideoObject }) => {
  return (
    <>
      <Link to={`/video/${video.id}`}>
        <div>
          <img
            src={video.thumbnail}
            alt="thumbnail"
            className="h-[200px] object-cover rounded-lg aspect-video"
          />
          <h1 className="text-4xl font-bold">{video.title}</h1>
          <p>{video.user.name}</p>
        </div>
      </Link>
    </>
  );
};
