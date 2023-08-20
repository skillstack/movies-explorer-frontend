import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page__container page__container_only-content">
      <section className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link to="/" className="not-found__link">Назад</Link>
      </section>
    </div>
  )
}

export default NotFound;