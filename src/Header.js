import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        alt="Amazon Logo"
        src="https://cdn.cdnlogo.com/logos/a/85/amazon.svg"
      />
      <div className="header-search">
        <input className="header-searchInput" type="text"></input>
        <SearchIcon className="header-searxhIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionOne"> Hello Naren</span>
          <span className="header-optionTwo"> SignIn</span>
        </div>
        <div className="header-option">
          <span className="header-optionOne">Returns </span>
          <span className="header-optionTwo">& Orders </span>
        </div>
        <div className="header-option">
          <span className="header-optionOne"> Your</span>
          <span className="header-optionTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-optionTwo header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
