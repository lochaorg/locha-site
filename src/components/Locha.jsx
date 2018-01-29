import React, { Component } from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import '../styles/Locha.css';

class Locha extends Component {
  render() {
    return (
      <div className="Locha">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default Locha;
