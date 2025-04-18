import React, { useState } from 'react';
import './profile.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    displayName: 'cnn-user-ick3472',
    email: 'ihateyoupass@gmail.com',
    firstName: 'Ci',
    lastName: 'Mi',
    avatar: 'https://placehold.co/100x100?text=Avatar'
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [editField, setEditField] = useState(null);
  const [tempValue, setTempValue] = useState('');

  const handleEdit = (field) => {
    setEditField(field);
    setTempValue(profile[field]);
  };

  const handleSave = () => {
    setProfile({...profile, [editField]: tempValue});
    setEditField(null);
  };

  const handleCancel = () => {
    setEditField(null);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile({...profile, avatar: event.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    alert('Account deletion requested. A confirmation email has been sent to your email address.');
    setShowDeleteConfirm(false);
  };

  return (
    <div className="profile-container">
      <h1>Your account</h1>

      {/* Avatar Section */}
      <section className="card">
        <div className="avatar-section">
          <img src={profile.avatar} alt="Profile" className="profile-avatar" />
          <label htmlFor="avatar-upload" className="avatar-upload-btn">
            Change Photo
            <input 
              id="avatar-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleAvatarChange}
              style={{display: 'none'}} 
            />
          </label>
        </div>
      </section>

      {/* Basic Info Section */}
      <section className="card">
        <h3>Basic Info</h3>
        <p className="description">Manage your personal information</p>
        
        <div className="info-row">
          <span>Display name</span>
          {editField === 'displayName' ? (
            <div className="edit-container">
              <input 
                type="text" 
                value={tempValue} 
                onChange={(e) => setTempValue(e.target.value)} 
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <>
              <span>{profile.displayName}</span>
              <button onClick={() => handleEdit('displayName')}>Edit</button>
            </>
          )}
        </div>
        
        <div className="info-row">
          <span>Email address</span>
          <span>{profile.email}</span>
        </div>
        
        <div className="info-row">
          <span>First name</span>
          {editField === 'firstName' ? (
            <div className="edit-container">
              <input 
                type="text" 
                value={tempValue} 
                onChange={(e) => setTempValue(e.target.value)} 
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <>
              <span>{profile.firstName}</span>
              <button onClick={() => handleEdit('firstName')}>Edit</button>
            </>
          )}
        </div>
        
        <div className="info-row">
          <span>Last name</span>
          {editField === 'lastName' ? (
            <div className="edit-container">
              <input 
                type="text" 
                value={tempValue} 
                onChange={(e) => setTempValue(e.target.value)} 
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <>
              <span>{profile.lastName}</span>
              <button onClick={() => handleEdit('lastName')}>Edit</button>
            </>
          )}
        </div>
      </section>

      {/* Newsletters Section */}
      <section className="card">
        <h3>Newsletters</h3>
        <p className="description">Your newsletter subscriptions</p>
        <p>You are not subscribed to any newsletters.</p>
        <button className="browse-btn">Browse all newsletters</button>
      </section>

      {/* Notification Preferences */}
      <section className="card">
        <h3>Notifications Preference Center</h3>
        <p className="description">Manage your push notifications</p>
        <button className="preference-btn">Preference Center</button>
      </section>

      {/* Manage Account */}
      <section className="card">
        <h3>Manage Account</h3>
        <button className="delete-btn" onClick={handleDeleteAccount}>
          Delete account
        </button>
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Account Deletion</h3>
            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            <div className="modal-buttons">
              <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
              <button className="confirm-delete-btn" onClick={confirmDelete}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;