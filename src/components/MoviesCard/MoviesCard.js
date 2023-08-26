import React from "react";

function MoviesCard(props) {
  function time(duration) {
    const number = parseInt(duration);
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}ч ${minutes}м`;
  }

  function like() {
    props.onLike(props.movie);
  }

  function remove() {
    props.onRemove(props.id);
  }

  return (
    <li className="movies-card__item">
      <div className="movies__preview">
        <a
          className="movie-card__trailer"
          href={props.movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__img"
            src={
              props.class !== "remove"
                ? `https://api.nomoreparties.co/${props.movie.image.url}`
                : props.movie.image
            }
            alt={props.movie.nameRU}
          />
        </a>
      </div>
      <div className="movies-card__description">
        <h2 className="movies-card__title">{props.movie.nameRU}</h2>
        <button
          className={
            props.class === "like"
              ? "movies-card__like-button movies-card__like-button_clicked"
              : props.class === "default"
              ? "movies-card__like-button"
              : "movies-card__delete-button"
          }
          onClick={props.class === "default" ? like : remove}
        ></button>
      </div>
      <p className="movies-card__duration">{time(props.movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
