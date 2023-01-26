const singleNumber = (nums) => {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }

  return res;
};

// // var singleNumber = function(nums) {
// //     const map = {};
// //     for (let n of nums) {
// //         map[n] = (map[n] || 0) + 1;
// //     }
// //     for (let k in map) {
// //         if (map[k] === 1) return k;
// //     }
// // };
