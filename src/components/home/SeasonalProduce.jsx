import React, { useState, useEffect } from 'react';
import './SeasonalProduce.css';

export default function SeasonalProduce() {
  const [produceData, setProduceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduceData = async () => {
      try {
        const response = await fetch('/data/produce.json');
        if (!response.ok) {
          throw new Error('Failed to fetch produce data');
        }
        const data = await response.json();
        
        // Filter for peak season or in-season items
        const seasonalProduce = data.produce.filter(item => 
          item.isPeakSeason || item.currentSeasonStatus === 'peak' || item.currentSeasonStatus === 'in-season'
        ).map(item => ({
          ...item,
          id: item.id || item.produceId,
          isPeakSeason: item.isPeakSeason || item.currentSeasonStatus === 'peak'
        }));
        
        // Limit to 3 items
        setProduceData(seasonalProduce.slice(0, 3));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduceData();
  }, []);

  if (loading) {
    return <div className="seasonal-produce loading">Loading seasonal produce...</div>;
  }

  if (error) {
    return <div className="seasonal-produce error">Error: {error}</div>;
  }

  return (
    <section className="seasonal-produce">
      <div className="seasonal-produce-wrapper">
        <div className="seasonal-produce-container">
          <div className="seasonal-produce-header">
            <div className="header-left">
              <div className="kicker">
                <svg className="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <span>PEAK HARVEST SEASON</span>
              </div>
              <h2 className="section-title">What's Fresh This Season</h2>
              <p className="section-subtitle">Real farm produce harvested at its absolute nutritional and flavor pinnacle right now.</p>
            </div>
            <a href="/produce" className="see-full-guide">
              See full produce guide
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="produce-grid">
            {produceData.map((produce) => (
              <div key={produce.id || produce.produceId} className="produce-card">
                <div className="card-image-header">
                  <img 
                    src={produce.imageUrl || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop'} 
                    alt={produce.name}
                    className="card-image"
                  />
                  <div className="peak-badge">Peak Season</div>
                  <button className="bookmark-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="card-body">
                  <div className="card-row-1">
                    <span className="category">{produce.category.toUpperCase()}</span>
                    <span className="price-range">{produce.priceRange || produce.price?.display}</span>
                  </div>
                  
                  <h3 className="card-title">{produce.name}</h3>
                  <p className="botanical-name">{produce.botanicalName || produce.localName}</p>
                  
                  <p className="card-description">{produce.description}</p>
                  
                  <div className="nutrition-box">
                    <svg className="leaf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6 C9.5 14.52 12 13 13 12"></path>
                    </svg>
                    <span className="nutrition-text">{produce.nutrition || produce.optional?.nutritionalHighlight}</span>
                  </div>
                </div>
                
                <div className="card-footer">
                  <span className="market-availability">Available at {produce.marketCount} markets</span>
                  <a href={`/produce/${produce.id || produce.produceId}`} className="harvest-profile-link">
                    Harvest Profile
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}