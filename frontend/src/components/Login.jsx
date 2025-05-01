import { useState } from 'react';
import axiosClient from '../api/axiosClient';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axiosClient.post('/admin/login', { username, password })
      .then(() => {
        localStorage.setItem('isAdmin', 'true');
        onLogin();
      })
      .catch(err => {
        alert(err.response?.data?.error || 'Login failed');
      });
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '15px',
    backgroundColor: '#c61a09',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Login to publish articles</h2>
      <input
        style={inputStyle}
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        style={inputStyle}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        style={buttonStyle}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
