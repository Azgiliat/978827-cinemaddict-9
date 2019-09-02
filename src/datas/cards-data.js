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
export default allFilmCards;
