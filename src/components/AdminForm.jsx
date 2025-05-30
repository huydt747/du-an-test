import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import React from 'react';
import '../css/AdminForm.css';

export default function AdminForm() {
  const [formData, setFormData] = useState({
    title: '', author: '', image_url: '', image_caption: '',
    content: '', subheader: '', publication_date: '', category_id: ''
  });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [articles, setArticles] = useState([]);
  const [filterCat, setFilterCat] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient.get('/categories')
      .then(res => setCategories(res.data))
      .catch(() => alert('Loading categories error'));
    fetchArticles();
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [filterCat]);

  useEffect(() => {
    if (slug) {
      axiosClient.get(`/articles/${slug}`)
        .then(res => {
          const article = res.data;
          setFormData({
            title: article.title || '',
            author: article.author || '',
            image_url: article.image_url || '',
            image_caption: article.image_caption || '',
            content: article.content || '',
            subheader: article.subheader || '',
            publication_date: article.publication_date || '',
            category_id: article.category_id?.toString() || ''
          });
        })
        .catch(() => alert('Error loading article for editing'));
    }
  }, [slug]);

  const fetchArticles = () => {
    const url = filterCat ? `/categories/${filterCat}/articles` : '/articles';
    axiosClient.get(url)
      .then(res => setArticles(res.data))
      .catch(() => alert('Error loading articles'));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.image_url.trim()) newErrors.image_url = 'Image URL is required';
    if (!formData.content.trim() || formData.content.trim().length < 350)
      newErrors.content = 'Content must be at least 350 characters';
    if (!formData.publication_date) newErrors.publication_date = 'Publication date is required';
    if (!formData.category_id) newErrors.category_id = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    axiosClient.post('/articles', formData)
      .then(() => {
        alert('Published successfully!');
        setFormData({
          title: '', author: '', image_url: '', image_caption: '',
          content: '', subheader: '', publication_date: '', category_id: ''
        });
        fetchArticles(); // Refresh article list after submission
      })
      .catch(err => alert('Error when publishing: ' + err.message));
  };

  const renderInput = (name, placeholder, type = 'text') => (
    <div className="form-input">
      <input name={name} placeholder={placeholder} type={type}
        value={formData[name]} onChange={handleChange} />
      {errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  );

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    axiosClient.delete(`/articles/${id}`)
      .then(() => {
        alert('Article deleted');
        fetchArticles();
      })
      .catch(() => alert('Error deleting article'));
  };

  const handleEdit = (slug) => {
    navigate(`/admin/edit/${slug}`);
  };

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  
  return (
    <div className="admin-container">
      <div className="admin-form">
        <h2>{slug ? 'Edit Article' : 'Upload new article'}</h2>
        <div className="form-group">
          {renderInput('title', 'Title')}
          {renderInput('author', 'Author')}
          {renderInput('image_url', 'Image url')}
          {renderInput('image_caption', 'Image caption')}
          <div className="form-textarea">
            <textarea name="subheader" placeholder="Subheader"
              value={formData.subheader} onChange={handleChange} />
          </div>
          <div className="form-textarea">
            <textarea name="content" placeholder="Content (minimum 350 characters)"
              value={formData.content} onChange={handleChange} />
            {errors.content && <span className="error">{errors.content}</span>}
            <div className={`character-count ${formData.content.length < 350 ? 'warning' : ''}`}>
              Characters: {formData.content.length} / 350
            </div>
          </div>
          {renderInput('publication_date', '', 'date')}
          <div className="form-select">
            <select name="category_id" value={formData.category_id} onChange={handleChange}>
              <option value="">--Category--</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            {errors.category_id && <span className="error">{errors.category_id}</span>}
          </div>
          <button className="publish-btn" onClick={handleSubmit}>Publish</button>
        </div>
      </div>

      <div className="article-management">
        <h2>Article Management</h2>
        <div className="filter-section">
          <select onChange={e => setFilterCat(e.target.value)} value={filterCat}>
            <option value="">-- All categories --</option>
            {categories.map(c => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="articles-list">
          {paginatedArticles.map(article => (
            <div className="article-item" key={article.id}>
              <div className="article-info">
                <strong>{article.title}</strong> - <em>{article.author}</em>
              </div>
              <div className="article-actions">
                <button className="view-btn" onClick={() => window.open(`/article/${article.slug}`, '_blank')}>
                  View
                </button>
                <button className="edit-btn" onClick={() => handleEdit(article.slug)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(article.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {(() => {
            const totalPages = Math.ceil(articles.length / articlesPerPage);
            const pages = [];

            const createPageButton = (page) => (
              <button
                key={page}
                className={currentPage === page ? 'active' : ''}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );

            if (totalPages <= 7) {
              for (let i = 1; i <= totalPages; i++) {
                pages.push(createPageButton(i));
              }
            } else {
              pages.push(createPageButton(1));
              if (currentPage > 4) pages.push(<span key="start-ellipsis">...</span>);

              const start = Math.max(2, currentPage - 1);
              const end = Math.min(totalPages - 1, currentPage + 1);

              for (let i = start; i <= end; i++) {
                pages.push(createPageButton(i));
              }

              if (currentPage < totalPages - 3) pages.push(<span key="end-ellipsis">...</span>);
              pages.push(createPageButton(totalPages));
            }

            return pages;
          })()}
        </div>

      </div>
    </div>
  );
}