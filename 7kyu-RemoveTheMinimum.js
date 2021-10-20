// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// p: arr of ints
// r: arr
// e: [1,2,4,6,5,4,7] =>> [2,4,6,5,4,7]
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers) {
  // copy arr to new one
  const arrNum = [...numbers];
  arrNum.splice(numbers.indexOf(Math.min(...numbers)), 1);

  // find min in number
  // find index of the min
  // splice it out of arr

  return arrNum;
}
