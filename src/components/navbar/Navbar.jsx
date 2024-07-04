import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="#">Logo</a>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="nav-button">
        <div className="anim-layer"></div>
        <a href="#">Sign Up</a>
      </div>

      <div id="mobile-menu" style={{ display: 'none' }}>
        <div className="mobile-nav-items">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="mobile-nav-button">
          <div className="anim-layer"></div>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
