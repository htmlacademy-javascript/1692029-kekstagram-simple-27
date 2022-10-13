const PHOTOCOUNT = 25;
const LikesCount = {
  MIN:15,
  MAX:200,
};

const CommentsAmount = {
  MIN:0,
  MAX:0,
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
  const result = string.length <= length;
  return result;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const CreatePicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description:  getRandomArrayElement(descriptions),
  likes: getRandomArrayElement(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomArrayElement(CommentsAmount.MIN, CommentsAmount.MAX),
});

const getPictures = Array.from({length: PHOTOCOUNT}, CreatePicture);


checkStringLength ('', 200);
getPictures();
