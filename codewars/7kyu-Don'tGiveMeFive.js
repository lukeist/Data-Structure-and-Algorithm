// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

// p: num int +-
// r: num
// e:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// 4 16 -  4,6,   7 8 9 10 11 12 13 14  16 =>
// 4 16 -  4,6,7,8,9,10,11,12,13,14,16 =>

// 4 10 - 4 6 7 8 9 10
// 4,9=> ,4,6,7,8,9

// 2,6 => 2,3,4,6
//
//-2,8 => -2-101234678
// -6 14 => -4 -3 -2-1 0 1 2 3 4 6 7 8 9 10 11 12 13 14

function dontGiveMeFive(start, end) {
  // loop from start to end
  //// conditionals: if num !== '5' => add to array
  //// return array.length
  let arr = [];

  for (let i = start; i <= end; ++i) {
    i.toString().indexOf("5") === -1 && arr.push(i);
  }

  return arr.length;
}
