import { useState, useEffect } from 'react';
import Login from '../components/Login';
import AdminForm from '../components/AdminForm';
import React from 'react';
export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isAdmin') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? <AdminForm onLogout={handleLogout} /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}
