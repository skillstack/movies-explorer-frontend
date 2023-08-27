import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { ResizeHandlerComponent } from "../../utils/HandleResize";
import { filterMovies } from "../../utils/FilterMovies";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies(props) {
  const moviesToShow = ResizeHandlerComponent();
  const [query, setQuery] = useState(
    sessionStorage.getItem("queryMovies") || "",
  );
  const [shortFilmsOnly, setShortFilmsOnly] = useState(() => {
    const savedShortFilmsOnly = sessionStorage.getItem("shortFilmsOnlyMovies");
    return savedShortFilmsOnly ? JSON.parse(savedShortFilmsOnly) : false;
  });
  const [movieCount, setMovieCount] = useState(0);
  const [clickCount, setClickCount] = useState(true);

  useEffect(() => {
    setMovieCount(moviesToShow.moviesOnPage);
  }, [moviesToShow]);

  useEffect(() => {
    sessionStorage.setItem("queryMovies", query);
  }, [query]);

  useEffect(() => {
    sessionStorage.setItem(
      "shortFilmsOnlyMovies",
      JSON.stringify(shortFilmsOnly),
    );
  }, [shortFilmsOnly]);

  const movies = filterMovies(
    props.beatfilmMovies,
    query,
    shortFilmsOnly,
    movieCount,
  );

  const moviesCards = movies.map((el) => {
    return (
      <MoviesCard
        key={el.id}
        id={el.id}
        class={el.class}
        movie={el}
        onRemove={props.handleRemoveMovie}
        onLike={props.handleLikeMovie}
      />
    );
  });

  function handleSearch(query) {
    setQuery(query);
  }

  function loadMoreMovies() {
    setMovieCount(movieCount + moviesToShow.addMoviesOnPage);
    setClickCount(false);
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
        <MoviesCardList
          moviesCards={moviesCards}
          addMovies={loadMoreMovies}
          maxMovies={movieCount}
          isSaved={false}
          clickCount={clickCount}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
