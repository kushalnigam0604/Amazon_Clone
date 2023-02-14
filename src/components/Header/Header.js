import React from "react";
import "./Header.css";
import amazon_logo from "../../assets/amazon_logo.png";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={amazon_logo} alt="" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
          <div className="header__option">
          <span className="header__optionOne">
              Hello Guest
          </span>
          <span className="header__optionTwo">
              Sign In
          </span>
          </div>
          <div className="header__option">
          <span className="header__optionOne">
              Returns
          </span>
          <span className="header__optionTwo">
              & Orders
          </span>
          </div>
          <div className="header__option">
          <span className="header__optionOne">
              Your
          </span>
          <span className="header__optionTwo">
              Prime
          </span>
          </div>
      </div>
    </div>
  );
}

export default Header;
