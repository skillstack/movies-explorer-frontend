import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';

function Profile() {

  return (
    <div className="page__container page__container_no-footer">
      <Header headerColor={'dark-grey'} />
      <main className="main">
        <section className="profile">
          <h2 className="profile__title">{`Привет, Виталий!`}</h2>
          <form className="profile__form">
            <label className="profile__field">
              Имя
              <input
                className="profile__input"
                id="name-input"
                name="name"
                type="text"
                placeholder="Виталий"
                required
              />
            </label>
            <div className="profile__line"></div>
            <label className="profile__field">
              E-mail
              <input
                className="profile__input"
                id="email-input"
                name="email"
                type="text"
                placeholder="pochta@yandex.ru"
                required
              />
            </label>
            <button className="profile__edit-button" type="submit">
              Редактировать
            </button>
            <Link className="profile__logout" to="/" >
              Выйти из аккаунта
            </Link>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Profile;