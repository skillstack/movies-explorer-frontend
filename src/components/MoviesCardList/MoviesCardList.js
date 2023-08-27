import React from "react";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.moviesCards.length > 0 ? (
        <ul className="movies-card-list__list">{props.moviesCards}</ul>
      ) : (
        <p className={"movies__list-notfound"}>Ничего не найдено</p>
      )}
      <div className="movies-card-list__button-container">
        <button
          className={
            props.clickCount || (props.moviesCards.length > props.maxMovies && !props.isSaved)
              ? "movies-card-list__button"
              : "movies-card-list__button movies-card-list__button_hidden"
          }
          type={"button"}
          onClick={() => props.addMovies()}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
