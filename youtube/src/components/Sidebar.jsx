import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>🏠 Home</li>
        <li>🔥 Trending</li>
        <li>🎬 Movies</li>
        <li>🎵 Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
