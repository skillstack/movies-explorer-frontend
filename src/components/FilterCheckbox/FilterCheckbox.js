import React from 'react';

function FilterCheckbox() {
  return (
    <label className="filter-сheckbox__container" for="checkbox">
      <input className="filter-сheckbox__input" type="checkbox" id="checkbox"></input>
      <span className="filter-сheckbox__title">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;