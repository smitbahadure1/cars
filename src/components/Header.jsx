import React from 'react';

export default function Header({ onNavClick, currentView }) {
  return (
    <div className="container">
      <nav>
        <button
          onClick={() => onNavClick('home')}
          className="logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          PDF & Image Tools
        </button>
        <div className="nav-links">
          <button
            onClick={() => onNavClick('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: currentView === 'home' ? 'var(--text-main)' : 'var(--text-secondary)', fontFamily: 'inherit', fontSize: '0.9rem' }}
          >
            Tools
          </button>

          <button
            onClick={() => onNavClick('pricing')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: currentView === 'pricing' ? 'var(--text-main)' : 'var(--text-secondary)', fontFamily: 'inherit', fontSize: '0.9rem' }}
          >
            Pricing
          </button>
        </div>
      </nav>
    </div>
  );
}
