// ["TimeMap", "set",      "get",      "get",       "set",            "get",      "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// [null, null,            "bar",      "bar",       null,              "bar2",     "bar2"]
//
// foo: {1: bar}
//
// foo: {4: bar2}
//
// foo: [{1: bar}, {4: bar2}]
//
// get0
//  l
// [1,4]
//r
//
// get2
//    l
// [1,4]
//  r
//    m
// get5
//       l
// [1,4]
//    r

class TimeMap {
  constructor() {
    this.map = {};
  }

  set(key, val, stamp) {
    if (!(key in this.map)) this.map[key] = [];
    this.map[key].push([stamp, val]);
  }

  get(key, stamp) {
    // [[1, bar], [4, bar2]]
    if (!(key in this.map)) return "";
    const a = this.map[key];
    let l = 0,
      r = a.length - 1;

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (stamp < a[m][0]) {
        r = m - 1;
      } else if (a[m][0] < stamp) {
        l = m + 1;
      } else return a[m][1];
    }
    return r < 0 ? "" : a[r][1];
  }
}
