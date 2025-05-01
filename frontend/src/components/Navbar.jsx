import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/ccn.webp';
import '../css/Navbar.css';

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAdmin') === 'true');

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
