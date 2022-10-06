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

getRandomPositiveInteger (1, 0);
checkStringLength ('', 120);
