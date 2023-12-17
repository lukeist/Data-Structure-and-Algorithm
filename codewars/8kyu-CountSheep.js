// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// parameters: num: int, >=0
// return: string: count from 1 to num
// examples: 0 && ''; 1 >>> 1sheep...; 2>>> 1sheep...2sheep (no plural)

var countSheep = function (num) {
  if (num === 0) return "";
  console.log(
    Array.from(Array(num), (e, i) => i + 1)
      .map((v) => v + " sheep...")
      .join("")
  );

  return Array.from(Array(num), (e, i) => i + 1)
    .map((v) => v + " sheep...")
    .join("");
};

countSheep(3);
