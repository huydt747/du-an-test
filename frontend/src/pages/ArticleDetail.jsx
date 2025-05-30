import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import "../css/ArticleDetail.css";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const articleRes = await axiosClient.get(`/articles/${slug}`, {
          signal: controller.signal,
        });

        const articleData = {
          ...articleRes.data,
        };
        setArticle(articleData);

        // Related posts
        let related = [];
        if (articleRes.data.category) {
          try {
            const relatedRes = await axiosClient.get(
              `/categories/${articleRes.data.category}/articles?exclude=${slug}&limit=4`,
              { signal: controller.signal }
            );
            related = relatedRes.data.map((post) => ({
              ...post,
              publication_date: post.publication_date,
            }));
          } catch {
            related = [];
          }
        }

        if (related.length < 4) {
          const fallbackRes = await axiosClient.get(
            `/articles?exclude=${slug}&limit=${
              4 - related.length
            }&sort=-createdAt`,
            { signal: controller.signal }
          );
          const fallback = fallbackRes.data.map((post) => ({
            ...post,
            publication_date: post.publication_date,
          }));
          related = [...related, ...fallback];
        }

        setRelatedPosts(related.slice(0, 4));

        // Top 10 articles
        const topRes = await axiosClient.get(
          "/articles?sort=views&order=desc&limit=10",
          { signal: controller.signal }
        );
        setTopPosts(
          topRes.data.slice(0, 10).map((post) => ({
            ...post,
            publication_date: post.publication_date,
          }))
        );

        // Tăng view count sau khi load xong data
        await updateViewCount(slug);
        
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.response?.data?.message || "Failed to load article");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [slug]);

  const updateViewCount = useCallback(async (articleSlug) => {
    try {
      const response = await axiosClient.patch(`/articles/${articleSlug}/views`);
      
      // Cập nhật article với views mới từ response
      if (response.data) {
        setArticle(prev => prev ? { ...prev, views: response.data.views } : prev);
        
        // Cập nhật lại topPosts nếu cần
        setTopPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.slug === articleSlug
              ? { ...post, views: response.data.views }
              : post
          )
        );
      }
    } catch (error) {
      console.error('Error updating view count:', error);
    }
  }, []);

  if (loading) {
    return (
      <div className="article-loading">
        <div className="skeleton-title" />
        <div className="skeleton-image" />
        <div className="skeleton-meta" />
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="skeleton-paragraph" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-error">
        <h3>Error Loading Article</h3>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!article)
    return <div className="article-not-found">Article not found</div>;

  return (
    <div className="article-container">
      <main className="article-main">
        <article className="article-content">
          <h1>{article.title}</h1>
          <div className="article-meta">
            {article.author && <span>By {article.author}</span>}
            <span>{article.publication_date}</span>
            {article.views && <span>{article.views.toLocaleString()} views</span>}
          </div>
          {article.image_url && (
            <figure className="article-image">
              <img
                src={article.image_url}
                alt={article.image_caption || article.title}
                loading="lazy"
              />
              {article.image_caption && (
                <figcaption>{article.image_caption}</figcaption>
              )}
            </figure>
          )}
          <div className="article-body">
            {typeof article.content === "string" ? (
              article.content.split("\n").map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{article.content}</p>
            )}
          </div>

          <section className="related-articles">
            <h2>Related Articles</h2>
            {relatedPosts.length > 0 ? (
              <div className="related-grid">
                {relatedPosts.map((post) => (
                  <article key={post.slug} className="related-card">
                    <a href={`/article/${post.slug}`}>
                      {post.image_url && (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          loading="lazy"
                        />
                      )}
                      <h3>{post.title}</h3>
                      <div className="post-meta">
                        {post.category && (
                          <span className="category">{post.category}</span>
                        )}
                        <time>{post.publication_date}</time>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-related">
                <p>No related articles found</p>
                <a href="/" className="explore-btn">
                  Explore More Articles
                </a>
              </div>
            )}
          </section>
        </article>
      </main>

      <aside className="article-sidebar">
        <section className="top-articles">
          <h2>Top 10 Articles</h2>
          <ol>
            {topPosts.map((post, index) => (
              <li key={post.slug}>
                <a href={`/article/${post.slug}`}>
                  <span className="rank">{index + 1}</span>
                  <span className="title">{post.title}</span>
                  <span className="views">
                    {post.views?.toLocaleString() || 0} views
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="categories">
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="/categories/business">Business</a>
            </li>
            <li>
              <a href="/categories/science">Science</a>
            </li>
            <li>
              <a href="/categories/health">Health</a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}