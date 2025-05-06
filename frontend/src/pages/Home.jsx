import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [categoryArticles, setCategoryArticles] = useState({});
  const [latestArticles, setLatestArticles] = useState([]);
  
  useEffect(() => {
    axiosClient.get('/articles/latest/10')
      .then(res => {
        setLatestArticles(res.data);
      })
      .catch(err => {
        console.error('Error loading latest articles:', err);
      });
  }, []);

  useEffect(() => {
    axiosClient.get('/categories')
      .then(response => {
        setCategories(response.data);
        
        response.data.forEach(category => {
          axiosClient.get(`/categories/${category.slug || category.id}/articles?limit=4`)
            .then(articlesResponse => {
              setCategoryArticles(prev => ({
                ...prev,
                [category.id]: articlesResponse.data
              }));
            })
            .catch(error => {
              console.error(`Error loading articles for category ${category.name}:`, error);
            });
        });
      })
      .catch(error => {
        console.error('Error loading categories:', error);
      });
  }, []);
  
  return (
<div className="main">
  <div className="main-columns">
    {/* Main Column 1 */}
    <div className="main-1">
      <div className="breaking-news">
        {latestArticles.length > 0 ? (
          <>
            <Link to={`/article/${latestArticles[0].slug}`} className="breaking-main-link">
              <h1 className="breaking-title">{latestArticles[0].title}</h1>
              <img
                width={700}
                src={latestArticles[0].image_url || 'https://placehold.co/700x400'}
                alt={latestArticles[0].image_caption}
                className="breaking-image"
              />
              <p className="breaking-caption">{latestArticles[0].title}</p>
            </Link>
            <ul className="breaking-list">
              {latestArticles.slice(1, 4).map(article => (
                <li key={article.id} className="breaking-list-item">
                  <Link to={`/article/${article.slug}`} className="breaking-link">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="skeleton-main-1 skeleton-main"></div>
        )}
      </div>
    </div>

    {/* Main Column 2 */}
    <div className="main-2">
      <div className="breaking-news-2">
        {latestArticles.length > 2 ? (
          [1, 2].map(i => (
            <div key={latestArticles[i].id} className="mini-article">
              <Link to={`/article/${latestArticles[i].slug}`} className="mini-link">
                <img
                  width={400}
                  src={latestArticles[i].image_url || 'https://placehold.co/600x300'}
                  alt={latestArticles[i].image_caption}
                  className="mini-image"
                />
                <h3 className="mini-title">{latestArticles[i].title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <>
            <div className="skeleton-main-2 skeleton-main"></div>
            <div className="skeleton-main-2 skeleton-main"></div>
          </>
        )}
      </div>
    </div>

    {/* Main Column 3 */}
    <div className="main-3">
      <div className="breaking-news-3">
        {latestArticles.length > 3 ? (
          latestArticles.slice(3, 6).map(article => (
            <div key={article.id} className="small-article">
              <Link to={`/article/${article.slug}`} className="small-link">
                <img
                  src={article.image_url || 'https://placehold.co/600x400'}
                  alt={article.image_caption}
                  className="small-image"
                />
                <h3 className="small-title">{article.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <>
            <div className="skeleton-main-3 skeleton-main"></div>
            <div className="skeleton-main-3 skeleton-main"></div>
            <div className="skeleton-main-3 skeleton-main"></div>
          </>
        )}
      </div>
    </div>
  </div>

      {/* Featured Section */}
      <div className="feature-section">
        <h1>Featured</h1>
        <div className="categories-grid">
          {categories.length > 0 ? (
            categories.map(category => (
              <div key={category.id} className="category">
                <Link to={`/categories/${category.slug || category.id}`}>
                  <h2>{category.name}</h2>
                </Link>

                {categoryArticles[category.id] && categoryArticles[category.id].length > 0 ? (
                  <>
                    <Link to={`/article/${categoryArticles[category.id][0].slug}`}>
                      <img
                        src={categoryArticles[category.id][0].image_url || 'https://placehold.co/600x400'}
                        alt={categoryArticles[category.id][0].image_caption}
                      />
                    </Link>

                    <ul>
                      <li>
                        <Link to={`/article/${categoryArticles[category.id][0].slug}`}>
                          <h3>{categoryArticles[category.id][0].title}</h3>
                        </Link>
                      </li>

                      {categoryArticles[category.id].slice(1, 4).map(article => (
                        <li key={article.id}>
                          <Link to={`/article/${article.slug}`}>
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="skeleton-category">
                    <div className="skeleton-category h2"></div>
                    <div className="skeleton-category img"></div>
                    <ul>
                      {[...Array(3)].map((_, i) => (
                        <li key={i} className="skeleton-category ul"></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="skeleton-feature-section skeleton-main"></div>
          )}
        </div>
      </div>
    </div>
  );
}