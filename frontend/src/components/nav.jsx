import React from "react";
import  "../css/home.scss"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-button">
          <i className="bi bi-list" style={{ fontSize: "1.8rem", cursor: "pointer" }}></i>
        </button>
        <a href="/">
          <img src="placeholder" alt="Logo" className="nav-logo" />
        </a>
        <a href="/us">US</a>
        <a href="/world">World</a>
        <a href="/politics">Politics</a>
        <a href="/business">Business</a>
        <a href="/opinion">Opinion</a>
        <a href="/health">Health</a>
        <a href="/entertainment">Entertainment</a>
        <a href="/style">Style</a>
        <a href="/travel">Travel</a>
        <a href="/sports">Sports</a>
        <a href="/video">Video</a>
        <button className="more-button">More</button>
      </div>
      <div className="nav-right">
        <a href="/audio">Audio</a>
        <a href="/live-tv">Live TV</a>
        <button className="search-button">
          <i className="bi bi-search" style={{ fontSize: "1.2rem", cursor: "pointer" }}></i>
        </button>
        <a href="/login">
          <button className="login-button">Log In</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
