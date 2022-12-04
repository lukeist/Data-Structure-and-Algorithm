// p: arr
// r: boolean

var containsDuplicate = function (nums) {
  const map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] !== 1) return true;
  }

  return false;
};
