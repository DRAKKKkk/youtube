// src/components/VideoCard.js
import React,{useState} from "react";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const [showIframe, setShowIframe] = useState(false);
  // Check if the video object or its URL is invalid
  if (!video || !video.url) return <p>Invalid video data</p>;

  // Extract the video ID from the YouTube URL
  const videoId = video.url.split("v=")[1]?.split("&")[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-card" onClick={() => setShowIframe(true)}>
      {/* Show the video thumbnail by default */}
      {!showIframe ? (}
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <iframe
        width="398"
        height="224"
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={video.title}
      ></iframe>
    </div>
  );
};

export default VideoCard;

