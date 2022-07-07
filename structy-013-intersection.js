// https://structy.net/problems/premium/intersection

// p: 2 arrays
// r: 1 array
// e: intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

const intersection = (a, b) => {
  const setA = new Set();
  const result = [];

  for (let num of a) {
    setA.add(num);
  }

  for (let num of b) {
    setA.has(num) && result.push(num);
  }
  return result;
};

console.log(
  intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]) // -> [2,6]
);

// const intersection = (a, b) => {
//     const map = {};

//     for (let num of a) {
//       map[num] = (map[num] || 0) + 1;
//     }

//     for (let num of b) {
//       map[num] = (map[num] || 0) + 1;
//     }

//     const result = [];
//     for (let num in map) {
//       map[num] > 1 && result.push(+num);
//     }

//     return result;
//   };
