/**
 * @param {number[]} nums
 * @return {number[]}
 */

// p: array;
// r: array
// e: 
//      [-4,-1,0,3,10]
//        i

//     max   min    max
//      [16,1,0,9,100]
//            j
// 
//      [16, 1, 0]
//             i
//      [0, 1, 16]
//               j
//      [3, 10]


// var sortedSquares = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] *= nums[i]
//     }
    
// }
// 
//           i 
//      [-4,-1,0,3,10]
//               j
//  [x,x,x,x,100]

var sortedSquares = function(nums) {
    const n = nums.length;
    let l = 0, r = n - 1, i = n - 1;
    const result = new Array(n);

    while (l <= r) {
        const l2 = nums[l] * nums[l]
        const r2 = nums[r] * nums[r]
        if (l2 < r2) {
            result[i] = r2;
            r--;
        } else {
            result[i] = l2;
            l++;
        }
        i--;
    } 
    return result;
};


// FASTEST RUNTIME:
// var sortedSquares = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] *= nums[i]
//     }

//     const min = Math.min(...nums);
//     const index = nums.indexOf(min);
//     const ascLeft = nums.slice(0, index + 1);
//     const left = [];

//     while (ascLeft.length > 0) {
//         left.push(ascLeft.pop());
//     }

//     const right = nums.slice(index + 1);
//     const result = [];
//     let i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i])
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     if (i === left.length) {
//         while (j < right.length) {
//             result.push(right[j])
//             j++;
//         }
//     }

//     if (j === right.length) {
//         while (i < left.length) {
//             result.push(left[i])
//             i++;
//         }
//     }

//     return result;
// };