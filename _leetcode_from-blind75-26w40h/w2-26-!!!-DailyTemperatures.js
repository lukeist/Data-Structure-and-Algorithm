/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// p: array of int;
// r: array
// e: 
//           0  1   2  3  4  5 6  7
//                             i   
//          [73,74,75,71,69,72,76,73] 
//            1  1  4  2  1  1  0   0
// stack []
// 
//          
//            0  0  0  0  0  0  0   0


function dailyTemperatures(temp) {
  const stack = []
  const a = new Array(temp.length).fill(0);

  for (let i = 0; i < temp.length; i++) {
      while (stack.length > 0 && temp[stack[stack.length - 1]] < temp[i]) {
          const index = stack.pop();
          a[index] = i - index;
      }
      stack.push(i);
  }
  return a;
}



// // Time Limit Exceeded
// var dailyTemperatures = function(temp) {
//     const a = [];
//     let i = 0, j = 1;
//     while (i < temp.length) {
//         if (temp[i] < temp[j]) {
//             a[i] = j - i;
//             i++;
//             j = i + 1;
//         } else {
//             if (j === temp.length) {
//                 a[i] = 0;
//                 i++;
//                 j = i + 1;
//             } else {
//                 j++;
//             }
//         }
//     }

//     return a;
// };