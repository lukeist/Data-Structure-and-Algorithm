// p: str, obj
// r: arr

// const sentence = "follow the yellow brick road";
// const synonyms = {
//   follow: ["chase", "pursue"],
//   yellow: ["gold", "amber", "lemon"],
// };

// substituteSynonyms(sentence, synonyms);
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]

// f t y b r                                ['']
//                                  c /           p \
// t y b r                       [c]                   [p]
//                               t|                   t|
// y b r                        [ct]                  [pt]
//                       g/     a/     l\           g/     a/     l\
// b r                 [ctg]    [cta]   [ctl]     [ptg]   [pta]     [ptl]
//                   b|        b|       b|          b|       b|         b|
//                  [ctgb]    [ctab]    [ctlb]      [ptgb]   [ptab]       [ptlb]

// const sentence = "follow the yellow brick road";
// const synonyms = {
//   follow: ["chase", "pursue"],
//   yellow: ["gold", "amber", "lemon"],
// };
// recursive
const substituteSynonyms = (sentence, synonyms) => {
  if (sentence === "") return [""];

  let result = [];

  const iOfSpace = sentence.indexOf(" ");
  let firstW = iOfSpace > 0 ? sentence.slice(0, iOfSpace) : sentence;
  let restS = iOfSpace > 0 ? sentence.slice(iOfSpace + 1) : "";
  //   console.log(iOfSpace, firstW);

  let restSentence = substituteSynonyms(restS, synonyms);

  if (firstW in synonyms) {
    for (let r of restSentence) {
      for (let s of synonyms[firstW]) {
        result.push(s + " " + r);
      }
    }
  } else {
    for (let r of restSentence) {
      result.push(firstW + " " + r);
    }
  }
  return result.map((r) => r.trim());
};

// // iterative O(n^m) O(n^m)
// const substituteSynonyms = (sentence, synonyms) => {
//   let result = [[]];
//   let array = sentence.split(" ");

//   for (let a of array) {
//     if (a in synonyms) {
//       let clone = [];
//       for (let r of result) {
//         for (let s of synonyms[a]) {
//           clone.push([...r, s]);
//         }
//       }

//       result = [...clone];
//     } else {
//       for (let r of result) {
//         r.push(a);
//       }
//     }
//   }

//   return result.map((r) => r.join(" "));
// };

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
