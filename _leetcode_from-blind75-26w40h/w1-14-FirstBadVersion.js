/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// p: number, number;
// r: number
// e:
// n = 5, bad = 4
//            b b
//            m
//  -> [1,2,3,4,5]
//            s
//          e

//                    b b b b b b
//                  m
//  -> [1,2,3,4,5,6,7,8,9,10,11,12]
//                    s
//                    e
//
//        b b
//      m
//  -> [1,2,3]
//        s
//      e

var solution = function (isBadVersion) {
  return function (n) {
    let s = 1;
    let e = n;

    while (s <= e) {
      let m = Math.floor((s + e) / 2);
      if (isBadVersion(m)) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    }
    return s;
  };
};
