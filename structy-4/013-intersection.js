// p: array, array;
// r: array;
// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

const intersection = (a, b) => {
  const set = new Set(a);
  const result = [];
  for (let n of b) {
    if (set.has(n)) result.push(n);
  }

  return result;
};
