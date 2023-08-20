import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <div className="page__container page__container_only-content">
      <AuthForm
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы? "
        linkText="Войти"
        link="/signin"
      >
        <label className="auth-form__field">
          Имя
          <input
            className="auth-form__input"
            id="name-input"
            name="name"
            type="text"
            placeholder="Виталий"
            required
          />
          <p className="auth-form__input-error"></p>
        </label>
        <label className="auth-form__field">
          E-mail
          <input
            className="auth-form__input"
            id="email-input"
            name="email"
            type="text"
            placeholder="pochta@yandex.ru"
            required
          />
          <p className="auth-form__input-error"></p>
        </label>
        <label className="auth-form__field">
          Пароль
          <input
            className="auth-form__input"
            id="password-input"
            name="password"
            type="password"
            placeholder="••••••••••••••"
          />
          <p className="auth-form__input-error">Что-то пошло не так...</p>
        </label>
      </AuthForm>
    </div>
  );
}

export default Register;
