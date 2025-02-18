import React, { useEffect, useState } from "react";
import { fetchVideos } from "../api";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos().then((data) => setVideos(data));
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
