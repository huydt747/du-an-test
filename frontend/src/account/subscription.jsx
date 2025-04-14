import React, { useState } from 'react';
import '../css/subscription.css';

const NewsletterSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState({
    breakingNews: false,
    fiveThingsAM: false,
    fiveGoodThings: true,
    sanjayGupta: true
  });

  const toggleSubscription = (newsletter) => {
    setSubscriptions(prev => ({
      ...prev,
      [newsletter]: !prev[newsletter]
    }));
  };

  const newsletters = [
    {
      id: 'breakingNews',
      title: 'Breaking News',
      frequency: 'Daily',
      description: 'Be the first to know about the biggest stories as they break. Sign up for breaking news email alerts from CNN.',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/newsletterlogo-breakingnews-1600x900-bar.jpg?c=original'
    },
    {
      id: 'fiveThingsAM',
      title: 'Five Things AM',
      frequency: 'Daily',
      description: "We’ll summarize five stories you need to know before starting your day.",
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/5things-am-1600x900.jpg?c=original'
    },
    {
      id: 'fiveGoodThings',
      title: 'Five Good Things',
      frequency: 'Weekly',
      description: 'Get inspired each week with the five most uplifting stories curated by the 5 Things team.',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/5goodthings-logo-1600x900.png?c=original'
    },
    {
      id: 'sanjayGupta',
      title: 'The Results Are In With Dr. Sanjay Gupta',
      frequency: 'Monthly',
      description: 'Dont miss the latest expert advice, medical advancements and inspiring techniques to live a healthier, happier and longer life.',
      image: 'https://cdn.cnn.com/cnn/2020/images/07/02/health_2.jpg'
    },
    {
        id: 'ReliableSources',
        title: 'Reliable Sources',
        frequency: 'Throughout the week',
        description: 'CNN’s Reliable Sources examines the information economy, chronicling the evolving media landscape in a digest with uncompromising reporting and analysis.',
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/reliablesources-logo-1600x900-rebrand2024-nobg.png?c=original'
      },
      {
        id: 'WhatMatters',
        title: 'What Matters',
        frequency: 'Daily Monday - Friday',
        description: "The American system of government has been challenged to deal with a divided country. In this time of political, cultural and economic upheaval, we’re trying to connect the dots. We’ll boil down What Matters and deliver it straight to your inbox.",
        image: 'https://cdn.cnn.com/cnn/2020/images/07/02/what_matters_2.jpg'
      },
      {
        id: 'MeanwhileinAmerica',
        title: 'Meanwhile in America',
        frequency: 'Thursdays',
        description: 'A weekly analysis of US politics for global readers. We’ll explain how we got here, what it means and where America and the world are heading next.',
        image: 'https://cdn.cnn.com/cnn/2020/images/07/02/meanwhile-in-america_2.jpg'
      },
      {
        id: 'MeanwhileinChina',
        title: 'Meanwhile in China',
        frequency: 'Weekly',
        description: 'CNN’s reporters in Hong Kong, Beijing and around the world bring you a weekly update on the latest news you need to know about China’s rise, analysis on what it means for the world, and predictions on what could happen next.',
        image: 'https://i2.cdn.turner.com/cnnnext/dam/assets/210511111541-newsletter-meanwhile-in-china.jpg'
      },
      {
        id: 'middleEast',
        title: 'Meanwhile in the Middle East',
        frequency: 'Weeky',
        description: 'An inside look at the biggest stories and trends in the Middle East and what they mean for your world, from CNN\'s experts across the region.',
        image: 'https://www.cnn.com/.element/interactive/2022/04/Logo_MeanwhileInMiddleEast.jpg'
      },
      {
        id: 'fareedBriefing',
        title: 'FAREED\'s Global Briefing',
        frequency: 'Daily Sunday - Friday',
        description: 'Insights, analysis and must reads from CNN\'s Fareed Zakaria and the Global Public Square team.',
        image: 'https://cdn.cnn.com/cnn/2020/images/07/02/global_briefing_2.jpg'
      },
      {
        id: 'nightcap',
        title: 'CNN Business Nightcap',
        frequency: 'Daily Monday - Thursday',
        description: 'We read all day so you don\'t have to. Sign up for CNN Business\' nightly newsletter for the top stories you need to know.',
        image: 'https://cdn.cnn.com/cnn/2020/images/08/04/logo_nightcap_1100.jpg'
      },
      {
        id: 'underscored',
        title: 'CNN Underscored',
        frequency: '3X Weeky',
        description: 'Check out reviews and recommendations for everything from tech to home decor to style and beauty products. CNN Underscored is separate from CNN editorial.',
        image: 'https://cdn.cnn.com/cnn/2020/images/07/02/underscored_2.jpg'
      }
  ];

  return (
    <div className="newsletter-container">
      <h1 className="newsletter-header">CNN Newsletters</h1>
      <p className="newsletter-subheader">
        You're logged in as <strong>hateyoupass@gmail.com</strong>. Manage your subscriptions.
      </p>
      
      <div className="newsletter-cards">
        {newsletters.map((item) => (
          <div key={item.id} className="newsletter-card">
            <img src={item.image} alt={item.title} className="newsletter-image" />
            <div className="newsletter-content">
              <span className="newsletter-frequency">{item.frequency}</span>
              <h3 className="newsletter-title">{item.title}</h3>
              <p className="newsletter-description">{item.description}</p>
              <button
                className={`newsletter-button ${subscriptions[item.id] ? 'subscribed' : ''}`}
                onClick={() => toggleSubscription(item.id)}
              >
                {subscriptions[item.id] ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterSubscriptions;