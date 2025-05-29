import { useState } from 'react';
import axiosClient from '../api/axiosClient';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validatePassword = (pwd) => {
    const minLength = 8;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;
    return pwd.length >= minLength && regex.test(pwd);
  };

  const handleLogin = () => {
    setError('');

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters, include upper/lowercase, a number and a special character');
      return;
    }

    axiosClient.post('/admin/login', {
      username: username.trim(),
      password: password
    })
      .then(() => {
        localStorage.setItem('isAdmin', 'true');
        onLogin();
      })
      .catch(err => {
        setError(err.response?.data?.error || 'Login failed');
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

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
    fontSize: '14px',
  };

  const passwordContainerStyle = {
    position: 'relative',
  };

  const toggleButtonStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666',
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

      <div style={passwordContainerStyle}>
        <input
          style={{ ...inputStyle, paddingRight: '40px' }}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="button"
          style={toggleButtonStyle}
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? '🫣' : '👁️'}
        </button>
      </div>

      <button style={buttonStyle} onClick={handleLogin}>Login</button>

      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
}
