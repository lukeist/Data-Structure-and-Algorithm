// p: str ,  obj
// r:arr
// const sentence = "follow the yellow brick road";
// const synonyms = {
//   follow: ["chase", "pursue"],
//   yellow: ["gold", "amber", "lemon"],
// };

// substituteSynonyms(sentence, synonyms);
// // [
// //   'chase the gold brick road',
// //   'chase the amber brick road',
// //   'chase the lemon brick road',
// //   'pursue the gold brick road',
// //   'pursue the amber brick road',
// //   'pursue the lemon brick road'
// // ]
//      ftgbr                        []
//                          /       \
//       tgbr             c         p
//                        |         |
//       gbr           t           t
//                  /  \  \      /   /  \
//                 g   a   l    g   a   l

const substituteSynonyms = (str, obj) => {
  const arr = str.split(" ");
  console.log(arr);
  const result = _substitutingSynonyms(obj, arr);
  console.log(result);

  return result.map((a) => a.join(" "));
};
const _substitutingSynonyms = (obj, arr) => {
  if (arr.length === 0) return [[]];

  const first = arr[0];
  const rest = _substitutingSynonyms(obj, arr.slice(1));

  const result = [];

  if (first in obj) {
    for (let r of rest) {
      for (let f of obj[first]) {
        result.push([f, ...r]);
      }
    }
  } else {
    for (let r of rest) {
      result.push([first, ...r]);
    }
  }

  return result;
};

const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"],
};

console.log(substituteSynonyms(sentence, synonyms));
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]
