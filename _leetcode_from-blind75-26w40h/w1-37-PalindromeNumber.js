/**
 * @param {number} x
 * @return {boolean}
 */

// p: number;
// r: boolean;
// e: 121
// 121 % 10 

// 12 1
// 1  121
// 0 1
var isPalindrome = function(x) {
    if (x < 0) return false;
    let xClone = x;
    let n = 0;
    while (xClone > 0) {
        let rest = xClone % 10;
        xClone = Math.floor(xClone / 10);
        n = n * 10 + rest;
    }
    return x === n;
};