import { Link } from "react-router-dom";
import { videoObjects } from "../data";

export const Home = () => {
  return (
    <>
      <div className="sm:p-8 flex gap-8 flex-col sm:flex-row p-0">
        {videoObjects.map((videoObject) => {
          return (
            <Link to={`/video/${videoObject.id}`}>
              <div>
                <h1 className="text-4xl font-bold">{videoObject.title}</h1>
                <p>{videoObject.user.name}</p>
                <p>{videoObject.views}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
