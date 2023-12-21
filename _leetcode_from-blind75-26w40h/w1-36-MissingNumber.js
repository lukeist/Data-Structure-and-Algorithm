/**
 * @param {number[]} nums
 * @return {number}
 */

// p: array;
// r: number;
// e: [3,0,1]
// len = n;
// 
//  0 1 2 3 4 5 6 7 8 9

var missingNumber = function(nums) {
    let n = nums.length;

    let sum = n * (n + 1) / 2
    // let sum = 0;
    // for (let i = 0; i <= n; i++) {
    //     sum += i
    // }

    for (let num of nums) {
        sum -= num;
    }

    return sum;
};

// var missingNumber = function(nums) {
//    const map = {};
   
//    for (let i = 0; i <= nums.length; i++) {
//        map[i] = 1;
//    } 

//     for (let n of nums) {
//         map[n]--;
//     }

//     for (let k in map) {
//         if (map[k] === 1) return k
//     }
// };