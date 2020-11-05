import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  // const [{ basket }, dispatch] = useStateValue();
  const [{ basket, user }] = useStateValue();

  const handlAuthentacation = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__nav__option" onClick={handlAuthentacation}>
            <span className="header__nav__option__lineOne">
              {user ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className="header__nav__option__lineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__nav__option">
            <span className="header__nav__option__lineOne">Returns</span>
            <span className="header__nav__option__lineTwo">Orders</span>
          </div>
        </Link>
        <div className="header__nav__option">
          <span className="header__nav__option__lineOne">Your</span>
          <span className="header__nav__option__lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__nav__busket">
            <ShoppingBasketIcon className="header__nav__busketIcon" />
            <span className="header__nav__option__lineTwo header__basketCounter">
              {/* ? means if basket is not defined don't crash app */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
