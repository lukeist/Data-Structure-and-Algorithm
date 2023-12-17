// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// p: string
// r: string
// e:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words) {
  // split words into array
  words = words.split(" ");
  // create function that get only number
  const getNum = (word) => {
    return +word.split("").filter((c) => !isNaN(parseInt(c)));
  };
  // map & sort array follow the number

  return words.sort((a, b) => getNum(a) - getNum(b)).join(" ");
  //
}
