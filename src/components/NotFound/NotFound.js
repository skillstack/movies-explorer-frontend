import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="page__container page__container_only-content">
      <section className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__link" onClick={goBack}>
          Назад
        </button>
      </section>
    </div>
  );
}

export default NotFound;
