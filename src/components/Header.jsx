import React from 'react';
import '../styles/Header.css';
import logo from '../images/locha-logo.jpg';

const Header = () => (
  <header className="Header">
    <div className="row-container">
      <div className="Header-container">
        <figure className="Header-figure">
          <img src={logo} alt="Locha Logo"/>
        </figure>
        <div className="Header-menu">
          <span className="Header-menu-text">Próximamente</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
