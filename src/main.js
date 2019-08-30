import searchMarkup from './components/search.js';
import userInfo from './components/user-info.js';
import menu from './components/menu.js';
import filmCard from './components/film-card.js';
import showMoreBtn from './components/show-more-button.js';

const header = document.querySelector(`.header`);
const main = document.querySelector(`main`);

const renderComponent = (container, component, position) => {
  container.insertAdjacentHTML(position, component);
};

renderComponent(header, searchMarkup(), `beforeEnd`);
renderComponent(header, userInfo(), `beforeEnd`);
renderComponent(main, menu(), `beforeEnd`);
renderComponent(main, `<section class="films">
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
const filmContainers = document.querySelectorAll(`.films-list__container`);
for (let i = 0; i < 5; i++) {
  renderComponent(filmContainers[0], filmCard(), `beforeEnd`);
  if (i < 2) {
    renderComponent(filmContainers[1], filmCard(), `beforeEnd`);
    renderComponent(filmContainers[2], filmCard(), `beforeEnd`);
  }
}
renderComponent(filmContainers[0], showMoreBtn(), `afterEnd`);
