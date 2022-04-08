// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// function anagrams(word, words) {
//   words = words.filter((v) => v.length === word.length);
//   let anaArr = [];
//   for (w of words) {
//     w = w.split("");
//     let tempStr = "";
//     let wordClone = word;
//     for (c of w) {
//       wordClone.indexOf(c) > -1 && (tempStr += c);
//       wordClone = wordClone.replace(c, "");
//     }
//     tempStr.length === word.length && anaArr.push(tempStr);
//   }

//   console.log(anaArr);
//   return anaArr;
// }

/// better solutoion: use array.SORT()
function anagrams(word, words) {
  console.log(
    words.filter(
      (w) => w.split("").sort().join("") === word.split("").sort().join("")
    )
  );
  return words.filter(
    (w) => w.split("").sort().join("") === word.split("").sort().join("")
  );
}
anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);
//['carer', 'racer']
