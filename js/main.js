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

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min (a, b));
  const upper = Math.floor(Math.max (a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPicture = (item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description:  getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomPositiveInteger(CommentsAmount.MIN, CommentsAmount.MAX),
});

const getPictures = () => Array.from({length: PHOTO_COUNT}, createPicture);


checkStringLength ('', 200);
getPictures();
