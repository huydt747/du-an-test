import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import { useParams, Link } from 'react-router-dom';
import '../css/Home.css';
import '../css/Category.css';

export default function Category() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`/categories/${slug}/articles`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy bài viết:', error);
      });
  }, [slug]);

  const mainArticle = articles[0] || null;
  const secondaryArticles = articles.slice(1, 8) || [];
  const column2Articles = articles.slice(4, 6) || [];
  const column3Articles = articles.slice(6, 9) || [];
  const whatsMoreArticles = articles.slice(9, 25) || [];

  return (
    <div className="main">
      <div className="main-columns">
        <div className="main-1">
          {mainArticle ? (
            <div className="breaking-news">
              <h1 className="breaking-title">
                <Link to={`/article/${mainArticle.slug}`} className="breaking-link">{mainArticle.title}</Link>
              </h1>
              <Link to={`/article/${mainArticle.slug}`} className="breaking-main-article">
                <img
                  className="breaking-image"
                  src={mainArticle.image_url || 'https://placehold.co/700x400'}
                  alt={mainArticle.image_caption}
                />
                {mainArticle.image_caption && (
                  <p className="breaking-caption">{mainArticle.image_caption}</p>
                )}
              </Link>

              {secondaryArticles.length > 0 && (
                <ul className="breaking-list">
                  {secondaryArticles.map((article) => (
                    <li key={article.id} className="breaking-list-item">
                      <Link to={`/article/${article.slug}`} className="breaking-link"><b>{article.title}</b></Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="skeleton-main-1 skeleton-main"></div>
          )}
        </div>

        <div className="main-2">
          <div className="breaking-news-2">
            {column2Articles.length > 0 ? (
              column2Articles.map((article) => (
                <div key={article.id} className="mini-article">
                  <Link to={`/article/${article.slug}`} className="breaking-main-article">
                    <img
                      className="mini-image"
                      src={article.image_url || 'https://placehold.co/600x300'}
                      alt={article.image_caption}
                    />
                  </Link>
                  <h2 className="mini-title">
                    <Link to={`/article/${article.slug}`} className="breaking-link">{article.title}</Link>
                  </h2>
                </div>
              ))
            ) : (
              <div className="skeleton-main-2 skeleton-main"></div>
            )}
          </div>
        </div>

        <div className="main-3">
          <div className="breaking-news-3">
            {column3Articles.length > 0 ? (
              column3Articles.map((article) => (
                <div key={article.id} className="small-article">
                  <Link to={`/article/${article.slug}`} className="breaking-main-article">
                    <img
                      className="small-image"
                      src={article.image_url || 'https://placehold.co/600x400'}
                      alt={article.image_caption}
                    />
                  </Link>
                  <h3 className="small-title">
                    <Link to={`/article/${article.slug}`} className="breaking-link">{article.title}</Link>
                  </h3>
                </div>
              ))
            ) : (
              <div className="skeleton-main-3 skeleton-main"></div>
            )}
          </div>
        </div>
      </div>

      {whatsMoreArticles.length > 0 ? (
        <div className="whats-more">
          <h1>What's more</h1>
          {whatsMoreArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="news"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Link to={`/article/${article.slug}`}>
                <img
                  src={article.image_url || 'https://placehold.co/600x400'}
                  alt={article.image_caption}
                />
              </Link>
              <h3>
                <Link to={`/article/${article.slug}`}>{article.title}</Link>
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="skeleton-whats-more">
          <h1></h1>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="news">
              <div className="news-img"></div>
              <div className="news-title"></div>
              <div className="news-title"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}