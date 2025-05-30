import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/ccn.webp';
import '../css/Navbar.css';

export default function Navbar() {
  const [, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAdmin') === 'true');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('/api/categories')
      .then((res) => {
        if (Array.isArray(res.data)) setCategories(res.data);
      })
      .catch((err) => {
        console.error('Can not fetch Category:', err);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = '/admin';
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    alert('Loged out');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="navbar">
      <a href="/"><img src={logo} alt="" id='logo' width={60} height={40} /></a>
      <div className="left">
        <ul>
          <li><a href="/categories/us">US</a></li>
          <li><a href="/categories/world">World</a></li>
          <li><a href="/categories/politics">Politics</a></li>
          <li><a href="/categories/business">Business</a></li>
          <li><a href="/categories/health">Health</a></li>
          <li><a href="/categories/entertainment">Entertainment</a></li>
          <li><a href="/categories/style">Style</a></li>
          <li><a href="/categories/travel">Travel</a></li>
          <li><a href="/categories/sports">Sports</a></li>
          <li><a href="/categories/science">Science</a></li>
        </ul>
      </div>
      <div className="right">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="20"
              fill="black"  // nếu nền trắng thì đổi thành "black"
              viewBox="0 0 25 25"
            >
              <path d="M10 2a8 8 0 105.29 14.29l4.71 4.71 1.41-1.41-4.71-4.71A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </button>
        </form>
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout} className="auth-button">Log out</button>
            <a href="/admin"><button className="auth-button">Admin</button></a>
          </>
        ) : (
          <button onClick={handleLogin} className="auth-button">Log in</button>
        )}
      </div>
    </div>
  );
}
