import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleToogleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <section className="navigation">
      <div className={isMenuOpen ? "navigation__overlay" : "navigation__overlay navigation__overlay_hide"} />
      <div className="navigation__inline-container">
        <div className="navigation__inline-menu">
          <NavLink className="navigation__inline-menu-link" to="/movies" >
            Фильмы
          </NavLink>
          <NavLink className="navigation__inline-menu-link" to="/saved-movies" >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="navigation__accaunt">
          <NavLink className="navigation__accaunt-link" to="/profile" >
            Аккаунт
            <div className="navigation__accaunt-icon" />
          </NavLink>
        </div>
      </div>
      <button className="navigation__burger-menu-open" onClick={handleToogleMenu} />
      <div className={isMenuOpen ? "navigation__burger-menu-container" : "navigation__burger-menu-container navigation__burger-menu-container_hide"}>
        <button className="navigation__burger-menu-close" onClick={handleToogleMenu} />
        <NavLink className="navigation__burger-menu-link" to="/" >
          Главная
        </NavLink>
        <NavLink className="navigation__burger-menu-link" to="/movies" >
          Фильмы
        </NavLink>
        <NavLink className="navigation__burger-menu-link" to="/saved-movies" >
          Сохранённые фильмы
        </NavLink>
        <div className="navigation__accaunt navigation__accaunt_burger">
          <NavLink className="navigation__accaunt-link" to="/profile" >
            Аккаунт
            <div className="navigation__accaunt-icon" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navigation;