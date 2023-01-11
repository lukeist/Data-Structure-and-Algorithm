// p: str, obj
// r: arr
// e:
//   ftybr                       []
//                         /                  \
//    tybr               c                    p
//                       |                    |
//   ybr                ct                    pt
//                  /    /  \               /    \     \
//              ctg   cta   ctl             ptg   pta     ptl
//              |
//             ctgb
//              |
//            ctgbr

const substituteSynonyms = (sentence, synonyms) => {
  const arr = sentence.split(" ");
  const result = ss(arr, synonyms).map((a) => a.join(" "));
  return result;
};

const ss = (arr, syn) => {
  if (arr.length === 0) return [[]];

  const result = [];
  const first = arr[0];
  const aWOf = ss(arr.slice(1), syn);

  if (first in syn) {
    for (let f of syn[first]) {
      for (let a of aWOf) {
        result.push([f, ...a]);
      }
    }
  } else {
    for (let a of aWOf) {
      result.push([first, ...a]);
    }
  }

  return result;
};

module.exports = {
  substituteSynonyms,
};
