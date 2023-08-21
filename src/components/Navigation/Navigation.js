import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="navigation__inline-menu-link active" to="/movies" >
            Фильмы
          </Link>
          <Link className="navigation__inline-menu-link" to="/saved-movies" >
            Сохранённые фильмы
          </Link>
        </div>
        <div className="navigation__accaunt">
          <Link className="navigation__accaunt-link" to="/profile" >
            Аккаунт
            <div className="navigation__accaunt-icon" />
          </Link>
        </div>
      </div>
      <button className="navigation__burger-menu-open" onClick={handleToogleMenu} />
      <div className={isMenuOpen ? "navigation__burger-menu-container" : "navigation__burger-menu-container navigation__burger-menu-container_hide"}>
        <button className="navigation__burger-menu-close" onClick={handleToogleMenu} />
        <Link className="navigation__burger-menu-link" to="/" >
          Главная
        </Link>
        <Link className="navigation__burger-menu-link active" to="/movies" >
          Фильмы
        </Link>
        <Link className="navigation__burger-menu-link" to="/saved-movies" >
          Сохранённые фильмы
        </Link>
        <div className="navigation__accaunt navigation__accaunt_burger">
          <Link className="navigation__accaunt-link" to="/profile" >
            Аккаунт
            <div className="navigation__accaunt-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;