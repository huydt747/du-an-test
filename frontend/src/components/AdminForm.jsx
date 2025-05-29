import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import '../css/AdminForm.css';

export default function AdminForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    image_url: '',
    image_caption: '',
    content: '',
    subheader: '',
    publication_date: '',
    category_id: ''
  });

  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosClient.get('/categories')
      .then(res => setCategories(res.data))
      .catch(() => alert('Loading categories error'));
  }, []);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
      isValid = false;
    }
    if (!formData.image_url.trim()) {
      newErrors.image_url = 'Image URL is required';
      isValid = false;
    }
    if (!formData.content.trim() || formData.content.trim().length < 350) {
      newErrors.content = 'Content must be at least 350 characters';
      isValid = false;
    }
    if (!formData.publication_date) {
      newErrors.publication_date = 'Publication date is required';
      isValid = false;
    }
    if (!formData.category_id) {
      newErrors.category_id = 'Category is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    
    axiosClient.post('/articles', formData)
      .then(() => {
        alert('Published successfully!');
        // Reset form after successful submission
        setFormData({
          title: '',
          author: '',
          image_url: '',
          image_caption: '',
          content: '',
          subheader: '',
          publication_date: '',
          category_id: ''
        });
      })
      .catch(err => alert('Error when publishing: ' + err.message));
  };

  return (
    <div className="admin-form">
      <h2>Upload new article</h2>
      <div className="form-group">
        <div>
          <input 
            name="title" 
            placeholder="Title" 
            value={formData.title}
            onChange={handleChange} 
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        
        <div>
          <input 
            name="author" 
            placeholder="Author" 
            value={formData.author}
            onChange={handleChange} 
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>
        
        <div>
          <input 
            name="image_url" 
            placeholder="Image url" 
            value={formData.image_url}
            onChange={handleChange} 
          />
          {errors.image_url && <span className="error">{errors.image_url}</span>}
        </div>
        
        <div>
          <input 
            name="image_caption" 
            placeholder="Image caption" 
            value={formData.image_caption}
            onChange={handleChange} 
          />
        </div>
        
        <div>
          <textarea 
            name="subheader" 
            placeholder="Subheader" 
            value={formData.subheader}
            onChange={handleChange} 
          />
        </div>
        
        <div>
          <textarea 
            name="content" 
            placeholder="Content (minimum 350 characters)" 
            value={formData.content}
            onChange={handleChange} 
          />
          {errors.content && <span className="error">{errors.content}</span>}
          <div className="character-count">
            Characters: {formData.content.length} / 350
          </div>
        </div>
        
        <div>
          <input 
            name="publication_date" 
            type="date" 
            value={formData.publication_date}
            onChange={handleChange} 
          />
          {errors.publication_date && <span className="error">{errors.publication_date}</span>}
        </div>
        
        <div>
          <select 
            name="category_id" 
            value={formData.category_id}
            onChange={handleChange}
          >
            <option value="">--Category--</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          {errors.category_id && <span className="error">{errors.category_id}</span>}
        </div>
        
        <button onClick={handleSubmit}>Publish</button>
      </div>
    </div>
  );
}