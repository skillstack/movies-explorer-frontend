import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className="search-form__container">
          <input className="search-form__input" type="text" placeholder="Фильм" required />
          <button className="search-form__submit-button" type="submit" />
        </label>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;