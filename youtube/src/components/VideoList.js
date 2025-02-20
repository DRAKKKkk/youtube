import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./VideoList.css";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || 'https://youtube-sh19.vercel.app/';


  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("https://your-vercel-backend.vercel.app/api/videos");
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      setVideos(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!videos.length) return <div>No videos found</div>;

  return (
    <div className="video-list">
      <h2>Video List</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
