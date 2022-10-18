// p: str, str
// r: num
// e:
// overlapSubsequence("dogs", "daogt"); // -> 3
// dogs daogt
// ogs   aogt
// gs     gt
// s      t

//              cat - aot
//          /                 \
//      at - aot            cat - ot
//          |             /         \
//        t - ot        at - ot       cat - t
//      /     \         /     \         /     \
//   x - ot   t - t   t       ot      at - t   cat - x
//              |
//              x

// overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5

// recusive W memo O(s1.length x s2.length) O(s1.l x s2.l)
const overlapSubsequence = (str1, str2, i1 = 0, i2 = 0, memo = {}) => {
  if (i1 === str1.length || i2 === str2.length) return 0;
  const i1i2 = i1 + "-" + i2;
  if (i1i2 in memo) return memo[i1i2];

  let count = 0;

  if (str1[i1] === str2[i2]) {
    count += 1 + overlapSubsequence(str1, str2, i1 + 1, i2 + 1, memo);
  } else {
    count += Math.max(
      overlapSubsequence(str1, str2, i1 + 1, i2, memo),
      overlapSubsequence(str1, str2, i1, i2 + 1, memo)
    );
  }

  memo[i1i2] = count;
  return count;
};

// recu WO memo O(2^n) O(2^n)
// const overlapSubsequence = (str1, str2, i1 = 0, i2 = 0) => {
//   if (i1 === str1.length || i2 === str2.length) return 0;
//   let count = 0;

//   if (str1[i1] === str2[i2]) {
//     count += 1 + overlapSubsequence(str1, str2, i1 + 1, i2 + 1);
//   } else {
//     count += Math.max(
//     overlapSubsequence(str1, str2, i1 + 1, i2),
//     overlapSubsequence(str1, str2, i1, i2 + 1)
//     )
//   }

//   return count;
// };
