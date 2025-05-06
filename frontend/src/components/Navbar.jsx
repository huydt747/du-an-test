import React, { useState } from 'react';
import logo from '../assets/ccn.webp';
import '../css/Navbar.css';

export default function Navbar() {
  const [categories, setCategories] = useState([
    "US", "World", "Politics", "Business", "Health",
    "Entertainment", "Style", "Travel", "Sports", "Science"
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAdmin') === 'true');
  const [showMenu, setShowMenu] = useState(false);

  const handleLogin = () => {
    window.location.href = '/admin';
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    alert('Logged out');
  };

  return (
    <>
      <div className="navbar">
        <div className="hamburger mobile-only" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
        <a href="/"><img src={logo} alt="CCN Logo" id='logo' width={60} height={40} /></a>
        
        <div className="left desktop-only">
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <a href={`/categories/${category.toLowerCase()}`}>{category}</a>
              </li>
            ))}
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
      
      {/* Mobile menu dropdown */}
      {showMenu && (
        <div className="mobile-menu">
          <ul>
            {categories.map((category) => (
              <li key={category} onClick={() => setShowMenu(false)}>
                <a href={`/categories/${category.toLowerCase()}`}>{category}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
