import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://skillstack.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            Статичный сайт<span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://skillstack.github.io/russian-travel/" target="_blank" rel="noreferrer">
            Адаптивный сайт<span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://skillstack.github.io/mesto/" target="_blank" rel="noreferrer">
            Одностраничное приложение<span className="portfolio__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;