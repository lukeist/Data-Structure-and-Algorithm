// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// prep
// parameter: str - case insens. / no num, no arr, no null no undefined funny stuff
// return: boolean
// example: 'xxoo' => true / 'adsfadf' => true / xooasd => false / xxadfsdfooox => true
const XO = (str) => {
  // make array from str toLowerCase
  str = str.toLowerCase().split("");
  // arrX = filter x from str
  // arrO = filter o from str
  // comparision / conditional => arrX === arrO ? true : false
  return (
    str.filter((v) => v === "x").length === str.filter((v) => v === "o").length
  );
};
