import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useState } from "react";
import { filterMovies } from "../../utils/FilterMovies";

function SavedMovies(props) {
  const [query, setQuery] = useState("");
  const [shortFilmsOnly, setShortFilmsOnly] = useState(false);

  const movies = filterMovies(props.savedMovies, query, shortFilmsOnly, 0);

  const userMoviesCards = movies.map((el) => {
    return (
      <MoviesCard
        key={el.movieId}
        id={el.movieId}
        class={el.class}
        movie={el}
        onRemove={props.handleRemoveMovie}
      />
    );
  });

  function handleSearch(query) {
    setQuery(query);
  }

  function handleToggleShortFilms(checked) {
    setShortFilmsOnly(checked);
  }

  return (
    <div className="page__container">
      <Header headerColor={"dark-grey"} loggedIn={props.loggedIn} />
      <main className="main">
        <SearchForm
          onSearch={handleSearch}
          onToggle={handleToggleShortFilms}
          checked={shortFilmsOnly}
        />
        <MoviesCardList isSaved={true} moviesCards={userMoviesCards} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
