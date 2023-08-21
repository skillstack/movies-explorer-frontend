import React from 'react';
import element from '../../images/promo-element.svg'

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img className="promo__img" src={element} alt="Элемент фона"/>
    </section>
  );
}

export default Promo;