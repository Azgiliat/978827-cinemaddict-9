const randMaxMin = (min, max) => Math.round(min + Math.round(Math.random() * (max - min)));
const allEmojis = [`./images/emoji/smile.png`, `./images/emoji/angry.png`, `./images/emoji/puke.png`, `./images/emoji/sleeping.png`, `./images/emoji/trophy.png`];
const texts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const authors = [`Tim Macoveev`, `John Doe`];
let comments = [];
allEmojis.forEach((item) => {
  comments.push({
    emoji: item,
    text: texts[randMaxMin(0, texts.length - 1)],
    author: authors[randMaxMin(0, authors.length - 1)],
    date: null,
  });
});

export default comments;
