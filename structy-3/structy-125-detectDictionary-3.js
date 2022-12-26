// p: arr, str;
// r: boolean;

// ["zoo", "tick", "tack", "door"];
// ghzstijbacdopnfklmeqrxyuvw
//
// zoo
//     i
// ti
// tick
// tack

const detectDictionary = (dict, alphabet) => {
  for (let i = 1; i < dict.length; i++) {
    if (!check(dict[i - 1], dict[i], alphabet)) return false;
  }
  return true;
};

const check = (w1, w2, al) => {
  const min = Math.min(w1.length, w2.length);
  for (let i = 0; i <= min; i++) {
    if (al.indexOf(w1[i]) < al.indexOf(w2[i])) return true;
    if (al.indexOf(w1[i]) > al.indexOf(w2[i])) return false;
  }
  return true;
};
