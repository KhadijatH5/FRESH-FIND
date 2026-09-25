import React, { useState, useEffect } from 'react';
import produceData from '../data/produce.json';
import './Hero.css';

export default function Hero({ onSearchSubmit, onExploreClick }) {
  const [destination, setDestination] = useState('');
  const [when, setWhen] = useState('Any day');
  const [produce, setProduce] = useState('Any produce');
  const [seasonalProduce, setSeasonalProduce] = useState([]);

  useEffect(() => {
    const inSeasonProduce = produceData.produce.filter(item => {
      const status = item.currentSeasonStatus;
      return status === 'peak' || status === 'in-season';
    });
    setSeasonalProduce(inSeasonProduce);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit({ destination, when, produce });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="badge">
            <span className="dot"></span>
            <span>Nigerian & Regional Harvest Radar</span>
          </div>

          <h1 className="hero-title">
            <span className="italic">Find What's Fresh</span>
            <span className="bold">Starts Here</span>
          </h1>

          <p className="hero-text">
            Discover nearby vibrant farmers' markets from Calabar to Lagos, track peak harvest schedules, and connect with local growers cultivating real food.
          </p>

          <button className="explore-btn" onClick={onExploreClick}>
            <span>Explore All Markets</span>
            <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div className="hero-right">
          <div className="search-card">
            <h2 className="search-title">
              <em>Where do</em> <strong>you want to shop?</strong>
            </h2>
            <p className="search-subtitle">
              Discover local growers, weekly farmgate markets, and peak seasonal harvests for every home.
            </p>

            <form className="search-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="icon location">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="input-content">
                  <label className="label">Where?</label>
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Search Destinations (e.g. Lagos, Calabar)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              <div className="search-row">
                <div className="input-group">
                  <div className="icon calendar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="input-content">
                    <label className="label">When?</label>
                    <select 
                      className="select" 
                      value={when} 
                      onChange={(e) => setWhen(e.target.value)}
                    >
                      <option value="Any day">Any day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <div className="icon produce">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6 C9.5 14.52 12 13 13 12"></path>
                    </svg>
                  </div>
                  <div className="input-content">
                    <label className="label">Produce?</label>
                    <select 
                      className="select" 
                      value={produce} 
                      onChange={(e) => setProduce(e.target.value)}
                    >
                      <option value="Any produce">Any produce</option>
                      {seasonalProduce.map(item => (
                        <option key={item.produceId} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="search-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}