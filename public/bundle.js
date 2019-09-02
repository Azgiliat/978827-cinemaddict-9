/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/film-card.js":
/*!*************************************!*\
  !*** ./src/components/film-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createCard = ({
  title,
  rating,
  info,
  comments,
  description,
  poster,
}) => {
  return `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${info.year}</span>
        <span class="film-card__duration">${info.durationInHM()}</span>
        <span class="film-card__genre">${info.genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`;
};
/* harmony default export */ __webpack_exports__["default"] = (createCard);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  watchlist,
  history,
  favorites
}) => `  <nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
    <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
  </nav>
  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`);


/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => `<form class="header__search search">
    <input type="text" name="search" class="search__field" placeholder="Search movies" value="popeye">
    <svg fill="#7171D8" class="search__film-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
      <path fill-rule="nonzero" d="M2 0v4.524h2.833V0h11.334v4.524H19V0h1v19h-1v-4.524h-2.833V19H4.833v-4.524H2V19H0V0h2zm0 7.238v4.524h2.833V7.238H2zm14.167 0v4.524H19V7.238h-2.833z"/>
    </svg>
    <button type="submit" class="visually-hidden">Search</button>
    <button class="search__reset" type="reset">Reset</button>
</form>`);


/***/ }),

/***/ "./src/components/show-more-button.js":
/*!********************************************!*\
  !*** ./src/components/show-more-button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => `<button class="films-list__show-more">Show more</button>`);


/***/ }),

/***/ "./src/components/user-info.js":
/*!*************************************!*\
  !*** ./src/components/user-info.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  rating,
  avatar
}) => `<section class="header__profile profile">
    <p class="profile__rating">${rating}</p>
    <img class="profile__avatar" src="${avatar}" alt="Avatar" width="35" height="35">
  </section>`);


/***/ }),

/***/ "./src/datas/cards-data.js":
/*!*********************************!*\
  !*** ./src/datas/cards-data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const randMaxMin = (min, max) => min + Math.round(Math.random() * (max - min));
const allFilmCards = [];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`, `Mystery`];
const names = [`The Godfather`, `The Shawshank Redemption`, `Pulp FIction`, `Star Wars: Episode II`, `The Dark Knight`, `The Matrix`, `Star Wars: Episode V - The Empire Strikes Back`, `Fight Club`, `Back to the Future`, `The Lord of the Rings - The Return of the King`, `The Good, The Bad & The Ugly`];
const posters = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
names.forEach((item) => {
  allFilmCards.push({
    title: item,
    rating: `${(Math.random() * 10).toFixed(1)}`,
    info: {
      year: randMaxMin(1900, 2019),
      duration: randMaxMin(6000000, 8000000),
      genre: genres[randMaxMin(0, genres.length)],
      durationInHM() {
        return `${Math.floor(this.duration / 1000 / 60 / 60)}h ${Math.round(this.duration / 1000 / 60 % 60)}m`;
      },
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`,
    poster: posters[Math.round(Math.random() * posters.length)],
    comments: [{},
      {},
      {},
      {}]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (allFilmCards);


/***/ }),

/***/ "./src/datas/menu-data.js":
/*!********************************!*\
  !*** ./src/datas/menu-data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watchlist: 13,
  history: 4,
  favorites: 8,
});


/***/ }),

/***/ "./src/datas/profile-data.js":
/*!***********************************!*\
  !*** ./src/datas/profile-data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  rating: `Movie Buff`,
  avatar: `images/bitmap@2x.png`
});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/search.js */ "./src/components/search.js");
/* harmony import */ var _components_user_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-info.js */ "./src/components/user-info.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_film_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/film-card.js */ "./src/components/film-card.js");
/* harmony import */ var _components_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/show-more-button.js */ "./src/components/show-more-button.js");
/* harmony import */ var _datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datas/cards-data.js */ "./src/datas/cards-data.js");
/* harmony import */ var _datas_menu_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datas/menu-data.js */ "./src/datas/menu-data.js");
/* harmony import */ var _datas_profile_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datas/profile-data.js */ "./src/datas/profile-data.js");









const header = document.querySelector(`.header`);
const main = document.querySelector(`main`);

const renderComponent = (container, component, position) => {
  container.insertAdjacentHTML(position, component);
};

renderComponent(header, Object(_components_search_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), `beforeEnd`);
renderComponent(header, Object(_components_user_info_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_datas_profile_data_js__WEBPACK_IMPORTED_MODULE_7__["default"]), `beforeEnd`);
renderComponent(main, Object(_components_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_datas_menu_data_js__WEBPACK_IMPORTED_MODULE_6__["default"]), `beforeEnd`);
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
  renderComponent(filmContainers[0], Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][i]), `beforeEnd`);
  if (i < 2) {
    renderComponent(filmContainers[1], Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][i]), `beforeEnd`);
    renderComponent(filmContainers[2], Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][i]), `beforeEnd`);
  }
}
renderComponent(filmContainers[0], Object(_components_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__["default"])(), `afterEnd`);

const moreBtn = document.querySelector(`.films-list__show-more`);
let showedCounter = 5;
moreBtn.addEventListener(`click`, () => {
  let tmp = showedCounter + 5;
  while ((showedCounter < tmp) && (showedCounter < _datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__["default"].length)) {
    renderComponent(filmContainers[0], Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][showedCounter]), `beforeEnd`);
    showedCounter++;
  }
  if (showedCounter === _datas_cards_data_js__WEBPACK_IMPORTED_MODULE_5__["default"].length) {
    moreBtn.style.display = `none`;
  }
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map