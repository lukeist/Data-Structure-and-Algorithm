// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// parameters: array / no num, no str, no null, no undefined ..
// return: array / no console log
// examples: (1,2, 'a','b') => [1,2]

const filter_list = (arr) => {
  return arr.filter((v) => typeof v === "number");
};
