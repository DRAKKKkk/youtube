import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">YouTube</h1>
      <input type="text" className="search-box" placeholder="Search..." />
      <div className="profile">👤</div>
    </div>
  );
};

export default Navbar;



