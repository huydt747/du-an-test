import React from 'react';
import './articles.css';

// Component cho Layout Bài Viết
const ArticleLayout = ({ mainContent, sidebarContent }) => {
  return (
    <div className="container">
      <div className="mainContent">{mainContent}</div>
      <div className="sidebarContent">{sidebarContent}</div>
    </div>
  );
};

// Component cho phần "Up next"
const UpNextSection = ({ articles }) => {
  return (
    <div className="upNextContainer">
      <h2 className="upNextTitle">Up next</h2>
      <ul className="upNextList">
        {articles.map((article, index) => (
          <li
            key={index}
            className={`upNextListItem ${index === articles.length - 1 ? 'lastListItem' : ''}`}
          >
            <div className="upNextText">
              <a href="#" className="upNextLink">{article.title}</a>
              <span className="upNextReadTime">{article.readTime}</span>
            </div>
            <img
              src={article.imageUrl}
              alt={`Thumbnail for ${article.title}`}
              className="upNextImage"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component cho Trang Bài Viết
const ArticlePage = () => {
  const upNextArticlesData = [
    {
      title: "She was in a candlelit hut in the Himalayas. Then her future husband walked through the door",
      readTime: "14 minute read",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/1chance-encounters-jenny-and-jason.jpg?q=w_1160,c_fill/f_webp",
    },
    {
      title: "Inside Ghanaian painter Amoako Boafo's rise to art-world stardom",
      readTime: "6 minute read",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/boafo-2023-0020-crp-v2-20250409131046596.jpg?c=16x9&q=h_144,w_256,c_fill",
    },
    {
      title: "Architect Sou Fujimoto: Expo 2025 is 'a precious opportunity to come together'",
      readTime: "7 minute read",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/sou-fujimoto-grand-ring-architect.jpg?c=16x9&q=h_144,w_256,c_fill"
    },
    {
      title: "This famous architect's iconic furniture line is getting its first update in decades",
      readTime: "5 minute read",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1311322508.jpg?c=16x9&q=h_144,w_256,c_fill"
    },
    {
      title: "Mysterious altar found in ancient Mayan city contains bodies - and wasn't made by the Maya",
      readTime: "4 minute read",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/rendering-figure-5-final-tikal-altar-6d-xv-sub3-photoedwinroman-isomheatherhurst-135mm-350dpi-copy-large.jpeg?c=16x9&q=h_144,w_256,c_fill"
    }
  ];

  const mostReadArticles = [
    "A Siemens exec, his family and their pilot are dead after helicopter crashes into the Hudson River",
    "SpaceX Starship launches on fourth flight, aims for controlled Indian Ocean splashdown",
    "Boeing CEO faces grilling from senators after whistleblowers raise safety concerns"
  ];

  const articleMainContent = (
    <div className="article">
      <h1 className="articleTitle">To tackle the e-waste problem, this casing for electronics dissolves in water</h1>
      <div className="articleMeta">
        <span className="articleAuthor">By Jacopo Prisco, CNN</span>
        <span className="articleDate">Updated 15:57 GMT+7, April 14, 2025</span>
      </div>
      <div className="articleImageContainer">
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/image-2-20250404155659841.png?c=16x9&q=h_833,w_1480,c_fill"
          alt="Aquafade dissolves in water"
          className="articleImage"
        />
        <div className="articleCaption">Aquafade, a new type of plastic casing for electronics, fully dissolves in water in about six hours.</div>
      </div>
      <p className="articleParagraph">
        As the world's appetite for computers, smartphones and other electronic devices grows ever bigger, the other side of the coin — e-waste — is raising alarms.
      </p>
      <h2 className="articleSubheader">Unusual inspiration</h2>
      <p className="articleParagraph">
        In the distant past, the area was a verdant savanna with trees, permanent lakes and rivers that supported large animals such as hippopotamuses and elephants.
      </p>
      <p className="articleParagraph">More content goes here...</p>
      <p className="articleParagraph">And even more content...</p>

      <UpNextSection articles={upNextArticlesData} />
    </div>
  );

  const articleSidebarContent = (
    <div className="sidebar">
      <div className="sidebarSection">
        <h2 className="sidebarTitle">Most Read</h2>
        <ul className="sidebarList">
          {mostReadArticles.map((article, index) => (
            <li
              key={index}
              className="sidebarListItem"
            >
              {article}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarSection">
        <h2 className="sidebarTitle">Follow CNN</h2>
        <div className="socialIcons">
          <span className="socialIcon">Facebook</span>
          <span className="socialIcon">Twitter</span>
          <span className="socialIcon">Instagram</span>
        </div>
      </div>
      <div className="sidebarAd">Advertisement</div>
    </div>
  );

  return (
    <ArticleLayout mainContent={articleMainContent} sidebarContent={articleSidebarContent} />
  );
};

const MostReadSection = () => {
  const mostReadData = [
    "Suspect arrested after arson at Pennsylvania governor’s house forced Shapiro and family to evacuate",
    "Trump official says tariff exemptions on tech are temporary. Elizabeth Warren calls trade war ‘red light, green light’ game",
    "Katy Perry, Gayle King and 4 other women are headed for the ‘edge of space.’ Here’s what that means",
    "US stock futures rise amid temporary tariff exemptions for tech products",
    "The company involved in the deadly helicopter crash in New York last week is shutting down immediately, FAA says",
    "A 17-year-old in Wisconsin allegedly killed his parents as part of a plot to assassinate Trump, FBI says",
    "‘White Lotus’ star Aimee Lou Wood responds to ‘mean and unfunny’ impersonation in ‘SNL’ sketch",
    "Rory McIlroy completes his long-awaited career grand slam with Masters triumph",
    "The dead in an upstate New York plane crash included 2022 NCAA woman of the year and family members",
    "Trump’s showdown with China deepens, with huge stakes for the economy",
  ];

  return (
    <div className="mostReadContainer">
      <h2 className="mostReadTitle">Most read</h2>
      <div className="mostReadGrid">
        <ul className="mostReadList">
          {mostReadData.slice(0, 5).map((title, index) => (
            <li key={index}>
              <span className="mostReadIndex">{index + 1}</span> {title}
            </li>
          ))}
        </ul>
        <ul className="mostReadList">
          {mostReadData.slice(5).map((title, index) => (
            <li key={index + 5}>
              <span className="mostReadIndex">{index + 6}</span> {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default ArticlePage;
