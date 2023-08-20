import React from 'react';
import film from '../../images/film.jpg'

function MoviesCard({ isSaved }) {
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  function handleCardOnMouseEnter() {
    setIsDeleteButtonVisible(true);
  }

  function handleCardOnMouseLeave() {
    setIsDeleteButtonVisible(false);
  }

  function handleLikeButtonOnCLick() {
    setIsLiked(!isLiked);
  }
  return (
    <li className="movies-card__item">
      <img className="movies-card__img" src={film} alt="33 слова о дизайне" />
      <div className="movies-card__description" onMouseEnter={handleCardOnMouseEnter} onMouseLeave={handleCardOnMouseLeave}>
        <h2 className="movies-card__title">33 слова о дизайне</h2>
        {isSaved
          ?
          <button className={isDeleteButtonVisible ? "movies-card__delete-button movies-card__delete-button_visible" : "movies-card__delete-button"}></button>
          :
          <button className={isLiked ? "movies-card__like-button movies-card__like-button_clicked" : "movies-card__like-button"} onClick={handleLikeButtonOnCLick}></button>
        }
      </div>
      <p className="movies-card__duration">1ч 42м</p>
    </li>
  )
}

export default MoviesCard;