import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./VideoPage.css";

const VideoPage = () => {
  const { id } = useParams();
  return (
    <div className="video-page">
      <ReactPlayer url={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`} controls width="80%" />
      <h2>Video Title {id}</h2>
    </div>
  );
};

export default VideoPage;
