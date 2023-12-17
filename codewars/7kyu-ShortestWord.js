// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// parameters: string - no empty / no num , no array, no null no undefined no funny stuff
// return number / not console.log print
// example 'hi how are you?' =>> 2  / 'hi how do you do' =>> 2

const findShort = (str) => {
  // split str to arr
  // map element -> e.length
  // find min of elements in array
  return Math.min(...str.split(" ").map((word) => word.length));
};
