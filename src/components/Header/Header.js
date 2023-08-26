import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

function Header({ headerColor, loggedIn }) {
  return (
    <header className={`header header_color_${headerColor}`}>
      <Link className="header__logo-link" to="/">
        <img className="header__logo-img" src={logo} alt="Логотип" />
      </Link>
      {loggedIn ? (
        <Navigation />
      ) : (
        <div className="header__links">
          <Link className="header__link-signup" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link-signin" to="/signin">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
