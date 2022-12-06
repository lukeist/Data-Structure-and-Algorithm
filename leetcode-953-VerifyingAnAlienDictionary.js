var isAlienSorted = function (words, order) {
  for (let i = 1; i < words.length; i++) {
    if (!checkOrder(words[i - 1], words[i], order)) return false;
  }

  return true;
};

const checkOrder = (w1, w2, order) => {
  let i = 0;
  const minLen = Math.min(w1.length, w2.length);

  while (i <= minLen) {
    if (order.indexOf(w1[i]) > order.indexOf(w2[i])) return false;
    if (order.indexOf(w1[i]) < order.indexOf(w2[i])) return true;

    i++;
  }

  return true;
};
