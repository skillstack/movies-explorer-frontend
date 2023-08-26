import React, { useState } from "react";

function FilterCheckbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    props.onToggle(newChecked);
  };

  return (
    <label className="filter-сheckbox__container" htmlFor="checkbox">
      <input
        className="filter-сheckbox__input"
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      ></input>
      <span className="filter-сheckbox__title">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
