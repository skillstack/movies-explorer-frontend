import React from 'react';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__facts">
        <div className="about-project__fact">
          <h3 className="about-project__fact-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__fact-info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__fact">
          <h3 className="about-project__fact-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__fact-info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline">
        <h3 className="about-project__one-week">1 неделя</h3>
        <h3 className="about-project__four-weeks">4 недели</h3>
        <p className="about-project__description">Back-end</p>
        <p className="about-project__description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;