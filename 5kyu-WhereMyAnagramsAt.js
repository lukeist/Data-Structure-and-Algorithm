// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  let test = [];
  for (value of words) {
    for (char of word.split("")) {
      test.push(value.split("").filter((v) => v === char));
    }
  }
  console.log(test);
}

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);
//['carer', 'racer']
