import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { Validation } from "../Validation/validation";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  const { register, handleSubmit, setValue } = Validation();
  const [filmValue, setFilmValue] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      const savedQuery = sessionStorage.getItem("queryMovies");
      if (savedQuery) {
        setValue("film", savedQuery);
        setFilmValue(savedQuery);
      }
    }
  }, [location.pathname]);

  const onSubmit = (data) => {
    props.onSearch(data.film);
  };

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="search-form__container">
          <input
            name="film"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            {...register("film")}
            value={filmValue}
            onChange={(e) => setFilmValue(e.target.value)}
          />
          <button className="search-form__submit-button" type="submit" />
        </label>
        <FilterCheckbox
          onToggle={props.onToggle}
          checked={props.checked}
          onSubmit={onSubmit}
          filmValue={filmValue}
        />
      </form>
    </section>
  );
}

export default SearchForm;
