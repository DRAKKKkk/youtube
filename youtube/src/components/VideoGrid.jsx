// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const VideoGrid = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/videos")
//       .then((res) => setVideos(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="video-grid">
//       {videos.map((video) => (
//         <Link to={`/video/${video._id}`} key={video._id} className="video-item">
//           <img src={video.thumbnail} alt={video.title} />
//           <h2>{video.title}</h2>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default VideoGrid;
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./VideoGrid.css"

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/videos");
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-grid">
      {videos.length === 0 ? (
        <p className="no-videos">No videos available</p>
      ) : (
        videos.map((video) => <VideoCard key={video._id} video={video} />)
          // <div key={video._id}>
          //   <h3>{video.title}</h3>
          //   <p>{video.description}</p>
          //   <video src={'https://www.youtube.com/watch?v=9B4CvtzXRpc&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=7'} controls width="400"></video>
          // </div>
        
      )}
    </div>
  );
};

export default Videos;
