import {getRandomPositiveInteger,getRandomArrayElement} from './util.js';

const PHOTO_COUNT = 25;
const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsAmount = {
  MIN: 0,
  MAX: 200,
};

const descriptions = [
  'Шикарный вид!!!!',
  'Просто класс!',
  'Вау!!!',
  'Это просто великолепно!',
  'Ни разу такого не видел!',
  'Отличное фото.',
  'Попробуй не "лайкни"!',
  'Невероятно',
  'Очень интересно',
];

const createPicture = (item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description:  getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomPositiveInteger(CommentsAmount.MIN, CommentsAmount.MAX),
});

const getPictures = () => Array.from({length: PHOTO_COUNT}, createPicture);

export {getPictures};
