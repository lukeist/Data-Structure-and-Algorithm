// p: str
// r: str

// O(s.length)
const mostFrequentChar = (s) => {
  // todo
  const map = {};
  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  //   let max = -Infinity;
  //   let result = "";
  //   for (let c of s) {
  //     if (map[c] > max) {
  //       result = c;
  //       max = map[c];
  //     }
  //   }

  let result = null;
  for (let c of s) {
    if (result === null || map[c] > map[result]) {
      result = c;
    }
  }
  return result;
};

// const mostFrequentChar = (s) => {
//   // todo
//   const map = {};

//   for (let c of s) {
//     map[c] = (map[c] || 0) + 1;
//   }

//   let max = -Infinity;
//   for (let c in map) {
//     max = Math.max(map[c], max);
//   }

//   for (let c of s) {
//     if (map[c] === max) return c;
//   }
// };

console.log(mostFrequentChar("bookeeper")); // -> 'e'

// // too many lines
// const mostFrequentChar = (s) => {
//     // todo
//     const map = {};

//     for (let c of s) {
//       map[c] = (map[c] || 0) + 1;
//     }

//     let max = -Infinity;
//     for (let c in map) {
//       max = Math.max(map[c], max);
//     }

//     const allMax = [];
//     for (let c in map) {
//       map[c] === max && allMax.push(c);
//     }

//     for (let i = 0; i < allMax.length; i++) {
//       allMax[i] = s.indexOf(allMax[i]);
//     }

//     let min = Math.min(...allMax);

//     return s[min];
//   };
