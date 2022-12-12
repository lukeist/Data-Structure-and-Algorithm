// p: arr, arr
// r: arr

// 4,2,1,6
// 3,6,9,2,10

const intersection = (a, b) => {
  const u = new Set(a);
  const r = [];
  for (let c of b) {
    if (u.has(c)) r.push(c);
  }
  return r;
};
