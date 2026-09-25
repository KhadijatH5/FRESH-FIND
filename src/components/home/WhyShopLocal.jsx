import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhyShopLocal.css';

export default function WhyShopLocal() {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'sun',
      title: 'True Sun & Soil Ripened',
      description: 'Jos plum tomatoes, sweet plantains, and tropical mangoes develop natural fructose on the plant—never chemically forced with ethylene gas.'
    },
    {
      icon: 'shield',
      title: 'Total Origin Transparency',
      description: 'Meet the agrarian families behind each harvest. Learn firsthand about rain-fed irrigation, volcanic soil richness, and organic pest management.'
    },
    {
      icon: 'heart',
      title: 'Empowering Smallholder Farmers',
      description: 'Direct market commerce ensures independent agrarian cooperatives keep their full earnings, fostering sustainable food security and vibrant rural communities.'
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'sun':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        );
      case 'shield':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'heart':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="why-shop-local">
      <div className="container">
        <div className="header">
          <div className="kicker">
            <svg className="leaf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6 C9.5 14.52 12 13 13 12"></path>
            </svg>
            <span>THE FARM-TO-TABLE DIFFERENCE</span>
          </div>
          <h1 className="title">Why Shop Directly at Local Farmers' Markets?</h1>
          <p className="description">
            Supermarket produce often spends weeks in cold storage and transcontinental shipping. Local farmers' markets bring you unadulterated field freshness harvested within hours.
          </p>
          <button className="cta-button" onClick={() => navigate('/markets')}>
            <svg className="market-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Explore Market Directory</span>
          </button>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-badge">
                {getIcon(feature.icon)}
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}