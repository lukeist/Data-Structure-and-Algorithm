// p: string;
// r: array;
// const sentence = "ftybr";
// const synonyms = {
//   f: ["c", "p"],
//   y: ["g", "a", "l"],
// };
//  => [ctgbr, ctabr, ctlbr, ptgbr, ptabr, ptlbr]

//                                  ftybr
// f                               /     \
//                          ctybr         ptybr
// t                          |             |
//                          ctybr           ptybr
// y                       / \ \          /     /   \
//                    ctgbr ctabr ctlbr   ptgbr ptabr ptlbr

const substituteSynonyms = (sentence, synonyms) => {
  const s = sentence.split(" ");

  const result = explore(s, synonyms);
  return result.map((i) => i.join(" "));
};

const explore = (arr, synonyms) => {
  if (arr.length === 0) return [[]];

  const result = [];
  const first = arr[0];
  const aWoFirst = explore(arr.slice(1), synonyms);

  if (first in synonyms) {
    for (let s of synonyms[first]) {
      for (let a of aWoFirst) {
        result.push([s, ...a]);
      }
    }
  } else {
    for (let a of aWoFirst) {
      result.push([first, ...a]);
    }
  }

  return result;
};
