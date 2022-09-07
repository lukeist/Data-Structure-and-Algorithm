// p: arr, arr
// r: arr

// new Set()
const intersection = (a, b) => {
  const x = new Set();
  const ab = [];

  for (let num of a) {
    x.add(num);
  }

  for (let num of b) {
    x.has(num) && ab.push(num);
  }

  return ab;
};

// // hash map
// const intersection = (a, b) => {
//   const map = {};
//   const ab = [];

//   for (let num of a) {
//     map[num] = false;
//   }

//   for (let num of b) {
//     if (num in map) ab.push(num);
//   }

//   return ab;
// };

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
