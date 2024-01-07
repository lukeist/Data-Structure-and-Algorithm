/**
 * @param {number[]} height
 * @return {number}
 */

// p: array
// r: int;
// e:
//       0 1 2 3 4 5 6 7 8
//         l
//      [1,8,6,2,5,4,8,3,7]
//                   r
// max = 49
function maxArea(height) {
  let l = 0,
    r = height.length - 1,
    max = 0;

  while (l < r) {
    const hl = height[l];
    const hr = height[r];
    const y = Math.min(hl, hr);
    const x = r - l;
    max = Math.max(max, y * x);

    hl < hr ? l++ : r--;
  }

  return max;
}
