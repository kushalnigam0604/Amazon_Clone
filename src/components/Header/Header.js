import React from 'react';
import './Header.css';
import amazon_logo from '../../assets/amazon_logo.png';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={amazon_logo} alt="" />
      <div className="header__search">
          <input type="text" className="header__searchInput" />
      </div>
    </div>
  )
}

export default Header
