/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// p: array, number;
// r: array
// e:
//           max
// [2,   3,   5,   1,    3   ]    3
//
// [true,true,true,false,true]  >= 2 => true

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);

  return candies.map((c) => (c + extraCandies >= max ? true : false));
};
