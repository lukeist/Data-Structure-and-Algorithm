// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

// p: int & int
//r: int / no print console
// e: n = 10, d=1

function nbDig(n, d) {
  // create array with n elememnts that each value = k
  //     .join("")
  // join them as 1 string
  //     .split("7");// split them with the 7 - not working - 7 may be at last index?

  //1,2,3,4,5
  let str = Array.from(Array(n + 1), (k, i) => i ** 2).join("");
  //   let strSplit = str.split(d);

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    +str[i] === d && count++;
  }
  console.log(strSplit.length, count);
  return count;
}
nbDig(5750, 0);
