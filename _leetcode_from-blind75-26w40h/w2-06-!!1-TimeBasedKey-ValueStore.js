var TimeMap = function () {
  this.map = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) this.map[key] = [];
  this.map[key].push({ value, timestamp });
};

//  love: [ { value: 'high', timestamp: 10 }, { value: 'low', timestamp: 20 } ]

// t = 5
//    l
//   [10,20]
// r
//    m

// t = 15
//       l
//   [10,20]
//    r
//       m

// t = 25
//           l
//   [10,20]
//       r
//       m

TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key]) return "";
  const values = this.map[key];
  let l = 0,
    r = values.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (timestamp < values[m].timestamp) {
      r = m - 1;
    } else if (values[m].timestamp < timestamp) {
      l = m + 1;
    } else return values[m].value;
  }

  if (r >= 0) return values[r].value;
  return "";
};
