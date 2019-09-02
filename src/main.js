import searchMarkup from './components/search.js';
import userInfo from './components/user-info.js';
import menu from './components/menu.js';
import showFilmCard from './components/film-card.js';
import showMoreBtn from './components/show-more-button.js';
import cardData from './datas/cards-data.js';
import menuData from './datas/menu-data.js';
import profileData from './datas/profile-data.js';

const header = document.querySelector(`.header`);
const main = document.querySelector(`main`);

const renderComponent = (container, component, position) => {
  container.insertAdjacentHTML(position, component);
};

renderComponent(header, searchMarkup(), `beforeEnd`);
renderComponent(header, userInfo(profileData), `beforeEnd`);
renderComponent(main, menu(menuData), `beforeEnd`);
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
  renderComponent(filmContainers[0], showFilmCard(cardData[i]), `beforeEnd`);
  if (i < 2) {
    renderComponent(filmContainers[1], showFilmCard(cardData[i]), `beforeEnd`);
    renderComponent(filmContainers[2], showFilmCard(cardData[i]), `beforeEnd`);
  }
}
renderComponent(filmContainers[0], showMoreBtn(), `afterEnd`);

const moreBtn = document.querySelector(`.films-list__show-more`);
let showedCounter = 5;
moreBtn.addEventListener(`click`, () => {
  let tmp = showedCounter + 5;
  while ((showedCounter < tmp) && (showedCounter < cardData.length)) {
    renderComponent(filmContainers[0], showFilmCard(cardData[showedCounter]), `beforeEnd`);
    showedCounter++;
  }
  if (showedCounter === cardData.length) {
    moreBtn.style.display = `none`;
  }
});
