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

  useEffect(() => {
    axiosClient.get('/categories')
      .then(res => setCategories(res.data))
      .catch(() => alert('Loading categories error'));
  }, []);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    axiosClient.post('/articles', formData)
      .then(() => alert('Published!'))
      .catch(err => alert('Error when publishing: ' + err.message));
  };

  return (
    <div className="admin-form">
      <h2>Upload new article</h2>
      <div className="form-group">
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />
        <input name="image_url" placeholder="Image url" onChange={handleChange} />
        <input name="image_caption" placeholder="Image caption" onChange={handleChange} />
        <textarea name="subheader" placeholder="Subheader" onChange={handleChange} />
        <textarea name="content" placeholder="Content" onChange={handleChange} />
        <input name="publication_date" type="date" onChange={handleChange} />
        <select name="category_id" onChange={handleChange}>
          <option>--Category--</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button onClick={handleSubmit}>Publish</button>
      </div>
    </div>
  );
}
