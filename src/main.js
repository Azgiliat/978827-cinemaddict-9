import searchMarkup from './components/search.js';
import userInfo from './components/user-info.js';
import menu from './components/menu.js';
import filmCard from './components/film-card.js';
import showMoreBtn from './components/show-more-button.js';

const renderComponent = (container, component, position) => {
  container.insertAdjacentHTML(position, component);
};

renderComponent(document.querySelector(`.header`), searchMarkup(), `beforeEnd`);
renderComponent(document.querySelector(`.header`), userInfo(), `beforeEnd`);
renderComponent(document.querySelector(`main`), menu(), `beforeEnd`);
renderComponent(document.querySelector(`main`), `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div></section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container">
        </div>
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
        <div class="films-list__container">
        </div>
      </section>`, `beforeEnd`);
for (let i = 0; i < 5; i++) {
  renderComponent(document.querySelector(`.films-list__container`), filmCard(), `beforeEnd`);
  if (i < 2) {
    renderComponent(document.querySelectorAll(`.films-list__container`)[1], filmCard(), `beforeEnd`);
    renderComponent(document.querySelectorAll(`.films-list__container`)[2], filmCard(), `beforeEnd`);
  }
}
renderComponent(document.querySelector(`.films-list__container`), showMoreBtn(), `beforeEnd`);
