import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({ children, title, buttonText, question, linkText, link }) {
  return (
    <div className="page__container page__container_only-content">
      <section className="auth-form">
        <Link className="auth-form__logo" to="/">
          <img className="auth-form__img" src={logo} alt="Логотип" />
        </Link>
        <h2 className="auth-form__title">{title}</h2>
        <form className="auth-form__container">
          {children}
          <button className="auth-form__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
        <p className="auth-form__text">
          {question}
          <Link className="auth-form__link" to={link}>
            {linkText}
          </Link>
        </p>
      </section>
    </div>
  );
}

export default AuthForm;