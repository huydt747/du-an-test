import React from "react";
import "./world.css";
const newsData = [
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-07t155818z-2143016801-rc2rpca3tmbv-rtrmadp-3-usa-israel.JPG?c=original",
    title: "Miracle rescues offer hope, days after deadly Myanmar earthquake",
    links: [
      "Hungary says it will pull out of ICC as it hosts Israel’s Netanyahu – who is wanted by the court",
      "Danish prime minister visits Greenland as Trump seeks control of the Arctic territory",
      "Myanmar’s military government announces temporary ceasefire to aid quake efforts",
      "Netanyahu jets to Orbán’s Hungary, a safe haven from his international arrest warrant",
      "DRC president commutes death sentences for 3 Americans convicted in coup attempt"
    ]
  },
];

const rightNews = [
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/still-21510506-47547-547-still.jpg?c=original",
    title: "China’s military launches live-fire exercise in escalation of blockade drills near Taiwan",
    links: [
      "Bakeries close across Gaza as World Food Programme warns food supplies are set to run out in two weeks",
      "Global scam industry evolving at ‘unprecedented scale’ despite recent crackdown",
      "US approves sale of 20 US F-16 fighter jets to Philippines as Washington tightens key Asian alliance",
      "Buildings in Myanmar continue to collapse days after deadly quake",
      "US moves B-2 stealth bombers to Indian Ocean island in massive show of force to Houthis, Iran"
    ]
  }
];

const adsAndMore = [
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-15234899b.jpg?c=original",
    title: "How Gaza’s hospitals became battlegrounds"
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/2025-04-03t081747z-1110488438-rc28qda7odtf-rtrmadp-3-israel-palestinians-hungary-1.jpg?c=original",
    title: "How the climate crisis fuels"
  }
];

const videoData = [
  {
    thumbnail: "https://media.cnn.com/api/v1/images/stellar/prod/cte-pkg-1-v5-clean-00031723.JPG?c=original",
    title: "Call to Earth: Kings of the forest",
    duration: "22:55",
  },
  {
    thumbnail: "https://media.cnn.com/api/v1/images/stellar/prod/07-gettyimages-2180589131.JPG?c=original",
    title: "Here’s how Trump’s tariffs are being received",
    duration: "2:17",
  },
  {
    thumbnail: "https://media.cnn.com/api/v1/images/stellar/videothumbnails/35680774-70080013-generated-thumbnail.jpg?c=original",
    title: "Here’s how Trump’s tariffs are being received",
    duration: "2:17",
  },
  {
    thumbnail: "https://media.cnn.com/api/v1/images/stellar/prod/still-21510581-2807200-506-still.jpg?c=original",
    title: "Here’s how Trump’s tariffs are being received",
    duration: "2:17",
  },
];
const worldData = [
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/2025-03-30t234732z-1731205948-rc2znda3eofg-rtrmadp-3-usa-trump.JPG?c=original",
    title: "Trump accuses Ukraine’s Zelensky of ‘trying to back out’ of proposed minerals deal",
    link:[
      "US citizen detained in Belarus accused of sneaking into country on cargo train",
      "Prince Andrew accuser Virginia Giuffre says she’s in hospital after car crash with a school bus",
      "Finland to exit landmines treaty and hike defense spending given Russia threat, prime minister says",
      "Marine Le Pen seems politically dead, but can the far right win in France without her?",
      "Far-right leader Marine Le Pen banned from 2027 presidential race, throwing French politics into disarray"
    ]
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2207423675.jpg?c=original",
    title: "Bakeries close across Gaza as World Food Programme warns food supplies are set to run out in two weeks",
    link: [
      "US moves B-2 stealth bombers to Indian Ocean island in massive show of force to Houthis, Iran",
      "Two arrested as investigation into ‘QatarGate’ in Israel deepens",
      "Israeli strike kills four in Beirut in test of fragile ceasefire with Hezbollah",
      "UAE court sentences 3 people to death in killing of Israeli-Moldovan rabbi Zvi Kogan",
      "Israel again expands Gaza war as Netanyahu vows he’s changing the Middle East. The endgame is unclear as ever"
    ]
  },
]
  const worldDataPhotos = [
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/13-15-2025-03-31t193707z-475143370-rc2eodavdy83-rtrmadp-3-ukraine-crisis-displaced-jpg.jpg?c=original",
    link:[
      "The week in 34 photos"
    ]
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2207533127.jpg?c=original",
    link:[
      "Deadly earthquake strikes Myanmar, Thailand and China"
    ]
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/ap335223948731.jpg?c=original",
    link:[
      "People we’ve lost in 2025"
    ]
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/26-26-24-gettyimages-2206555197.jpg?c=original",
    link:[
      "The week in 34 photos"
    ]
  },
] 
const categories = [
  {
    category: "AFRICA",
    title: "Africa’s first ‘AI factory’ could be a breakthrough for the continent",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/2024-05-06t171114z-248050331-rc23l7a7lflb-rtrmadp-3-milken-conference.JPG?c=original"
  },
  {
    category: "AMERICAS",
    title: "‘We’re nice until we’re not’: How Trump’s tariffs threaten Wayne Gretzky’s hometown",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/004-elconin-cnn-72.jpg?c=original"
  },
  {
    category: "ASIA",
    title: "Miracle rescues offer hope, days after deadly Myanmar earthquake",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-15234899b.jpg?c=original"
  },
];


const featured = [
  {
    category: "TRAVEL",
    title: "US tourist arrested after allegedly attempting to contact ‘world’s most isolated’ tribe",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2155696253.jpg?c=original"
  },
  {
    category: "STYLE",
    title: "Penthouse atop world’s skinniest skyscraper is now on the market for $110 million",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/111-west-57th-street-quadplex-80-2-credit-to-hayes-davidson.jpg?c=original"
  },
  {
    category: "WEATHER",
    title: "Extreme rainfall brings potentially deadly flooding to parts of central US already slammed by storms",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2207726061.jpg?c=original"
  },
]
const latestStories = [
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/2025-04-03t081747z-1110488438-rc28qda7odtf-rtrmadp-3-israel-palestinians-hungary-1.jpg?c=original",
    time: "22:55",
    title: "Hungary says it will pull out of ICC as Orban hosts Israel's Netanyahu - who is wanted by the court",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/cte-pkg-1-v5-clean-00031723.JPG?c=original",
    time: "2:17",
    title: "Call to Earth: Kings of the forest",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/07-gettyimages-2180589131.JPG?c=original",
    time: "2:37",
    title: "Here's how Trump's tariffs are being received by major US trade partners",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/videothumbnails/35680774-70080013-generated-thumbnail.jpg?c=original",
    time: "...",
    title: "USAID worker feels her country abandoned her & her family",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/still-21510581-2807200-506-still.jpg?c=original",
    time: "2:05",
    title: "Palestinian family says son was tortured to death for publicly criticizing Hamas",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gret.jpg?c=original",
    time: "4:17",
    title: "Canadians call hockey legend Wayne Gretzky a ‘MAGA junkie’ for supporting Trump amid looming US trade war",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/students.jpg?c=original",
    time: "0:05",
    title: "Principal’s April Fools’ Day prank stuns students",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/videothumbnails/09423540-74723018-generated-thumbnail.jpg?c=original",
    time: "5:56",
    title: "Israel announces expansion of military operation in Gaza",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/videothumbnails/08349718-93440259-generated-thumbnail.jpg?c=original",
    time: "3:23",
    title: "Israel announces expansion of military operation in Gaza",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/videothumbnails/06373710-67207845-generated-thumbnail.jpg?c=original",
    time: "3:26",
    title: "Putin’s Adviser Dmitriev to Visit Washington for Talks",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/still-21510506-47547-547-still.jpg?c=original",
    time: "2:37",
    title: "China’s military launches live-fire exercise in escalation of blockade drills near Taiwan",
    description: "Some description here..."
  },
  {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/240107-f-vj532-1019b.jpg?c=original",
    time: "...",
    title: "US approves sale of 20 US F-16 fighter jets to Philippines as Washington tightens key Asian alliance Something Extra",
    description: "Some description here..."
  },
  
];

function World() {
  return (
    <div className="world">
      <header>
        <h1>World</h1>
      </header>
    <main>
        <div className="content-left">
          {newsData.map((news, index) => (
            <div key={index}>
              <img src={news.image} alt="" className="news-main-image" />
              <h2 className="news-title">{news.title}</h2>
              <ul>
                {news.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="content-right">
          {rightNews.map((news, index) => (
            <div key={index}>
              <img src={news.image} alt="" className="news-right-image" />
              <h3 className="news-subtitle">{news.title}</h3>
              <ul>
                {news.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className="ads">  
            <div className="ads-section">
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147918975.jpg?c=original" alt="Advertisement" className="ad-banner" />
            </div>
            {adsAndMore.map((news, index) => (
                <div key={index}>
                <img src={news.image} alt="" className="news-small-image" />
                <h4 className="news-small-title">{news.title}</h4>
                </div>
            ))}
          </div>
        </div>
    </main>
      <div className="video">
        <h1>Video</h1>
        <div className="content-video">
          {videoData.map((video, index) => (
            <div key={index} className="video-card">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <span className="video-duration">{video.duration}</span>
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
        <div className="around-the-wor1d">
            <div className="tit1e">
              <ul>
                <li>
                  <a href="">Europe</a>
                  <a href="">Middle East</a>
                  <a href="">World in Photos</a>
                </li>
              </ul>
            </div>
            <div className="content-wor1d">
              {worldData.map((news, index) => (
              <div key={index}>
                  <img src={news.image} alt="" className="World-Data-image" />
                  <h2 className="world-Data-title">{news.title}</h2>
                  <ul>
                    {news.link.map((linkItem, i) => (
                      <li key={i}>
                        <a href="#">{linkItem}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="dataWorldPhotos">
            {worldDataPhotos.map((news, index) => (
              <div key={index}>
                  <img src={news.image} alt="" className="World-Data-Photos" />
                  <h2 className="world-Photos-title">{news.title}</h2>
                  <ul>
                    {news.link.map((linkItem, i) => (
                      <li key={i}>
                        <a href="#">{linkItem}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
        <div className="p-6 bg-gray-100 text-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-500">{item.category}</h3>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold my-6">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-500">{item.category}</h3>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-8">
            <h2 id ="titleMore">More of the latest stories</h2>
            <div className="more-latest-stories"> 
              {latestStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-500">{story.time}</h3>
                    <h2 className="text-lg font-semibold mb-2">{story.title}</h2>
                    <p className="text-sm text-gray-600">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default World;
