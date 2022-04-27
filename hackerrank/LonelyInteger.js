// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .

// function lonelyinteger(arr) {
//   // Write your code here
//   for (let i = 0; i < arr.length; i++) {
//     // console.log("this", arr[i]);
//     const indexes = arr.reduce((containArr, c) => {
//       arr[i] === c && containArr.push(c);
//       return containArr;
//     }, []);
//     if (indexes.length === 1) {
//       console.log(indexes[0]);
//       return indexes[0];
//     }
//   }
// }

// better solution
function lonelyinteger(arr) {
  // Write your code here
  const newA = arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));

  // for (let i = 0; i < arr.length; i++) {
  //   // console.log("this", arr[i]);
  //   arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)
  //     // arr.indexOf(arr[i] === arr.lastIndexOf(arr[i]))
  console.log(newA);

  // }
}

lonelyinteger([1, 2, 3, 4, 3, 4, 9, 2, 1]);
