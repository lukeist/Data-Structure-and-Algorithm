// https://structy.net/problems/premium/most-frequent-char

// p: str
// r: str
// e: mostFrequentChar('bookeeper'); // -> 'e'

const mostFrequentChar = (s) => {
  const map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  let best = null;
  for (let char of s) {
    if (best === null || map[char] > map[best]) {
      best = char;
    }
  }

  return best;
};

// ///////////////////////////////////////////// dont have to loop thru str twice
// const mostFrequentChar = (s) => {
//   const map = {};
//   for (let char of s) {
//     map[char] = (map[char] || 0) + 1;
//   }

//   let max = -Infinity;

//   for (let char in map) {
//     max = Math.max(map[char], max);
//   }

//   for (let char in map) {
//     if (map[char] === max) return char;
//   }
// };

console.log(mostFrequentChar("boeookeperrroe"));
