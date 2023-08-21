import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ isSaved }) {
  const isLoading = false;

  return (
    <section className="movies-card-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className="movies-card-list__list">
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
            <MoviesCard isSaved={isSaved} />
          </ul>
          <div className="movies-card-list__button-container">
            <button className={isSaved ? "movies-card-list__button movies-card-list__button_hidden" : "movies-card-list__button"}>Ещё</button>
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;