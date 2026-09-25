import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Markets', path: '/markets' },
    { name: 'Produce', path: '/produce' },
    { name: 'Seasonal', path: '/seasonal' },
    { name: 'About', path: '/about' }
  ];

  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/markets') return 'Markets';
    if (path === '/produce') return 'Produce';
    return 'Home';
  };

  const activeTab = getActivePage();

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            className="mobile-toggle-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245D27" strokeWidth="2.5" strokeLinecap="round">
              {isMobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link to="/" className="brand-logo-group" onClick={handleNavClick}>
            <div className="leaf-glyph">
              <span className="glyph-line glyph-line-1"></span>
              <span className="glyph-line glyph-line-2"></span>
              <span className="glyph-line glyph-line-3"></span>
            </div>
            <span className="brand-title">FreshFind</span>
          </Link>
        </div>

        <nav className="nav-floating-pill">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link-btn ${activeTab === link.name ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {link.name}
            </Link>
          ))}

          <Link 
            to="/bookmarks"
            className={`nav-link-btn ${activeTab === 'Bookmarks' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Basket</span>
            <span className="basket-badge">4</span>
          </Link>
        </nav>

        <div className="navbar-actions">
          <button 
            className={`audio-toggle-btn ${isSoundOn ? 'sound-on' : 'sound-off'}`}
            onClick={() => setIsSoundOn(!isSoundOn)}
            aria-label="Toggle sound feedback"
          >
            <svg 
              className={isSoundOn ? 'speaker-icon-pulse' : ''} 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isSoundOn ? (
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </>
              ) : (
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </>
              )}
            </svg>
          </button>

          <button className="login-link">
            Log in
          </button>

          <Link to="/markets" className="btn-find-market">
            Find a Market
          </Link>

          <button className="avatar-btn" aria-label="User Profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
        </div>

      </div>

      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link-btn ${activeTab === link.name ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/bookmarks"
            className={`nav-link-btn ${activeTab === 'Bookmarks' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Basket</span>
            <span className="basket-badge">4</span>
          </Link>
        </div>
      </div>
    </header>
  );
}