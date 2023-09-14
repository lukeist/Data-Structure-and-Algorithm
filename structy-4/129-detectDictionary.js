// p: array, string;
// r: boolean;
// e: ["zoo", "tick", "tack", "door"], "ghzstijbacdopnfklmeqrxyuvw"
// => true
// 2
// zoo
// tick
// tack
// door

// zoos
// zoo
// tick
// tack
// door
// ghzstijbacdopnfklmeqrxyuvw

const detectDictionary = (dictionary, alphabet) => {
  for (let i = 1; i < dictionary.length; i++) {
    const w1 = dictionary[i - 1];
    const w2 = dictionary[i];
    if (!checkOrder(w1, w2, alphabet)) return false;
  }
  return true;
};

const checkOrder = (w1, w2, alphabet) => {
  for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
    const i1 = alphabet.indexOf(w1[i]);
    const i2 = alphabet.indexOf(w2[i]);
    if (i1 > i2) {
      return false;
    } else if (i1 < i2) {
      return true;
    }
  }
  return true;
};
