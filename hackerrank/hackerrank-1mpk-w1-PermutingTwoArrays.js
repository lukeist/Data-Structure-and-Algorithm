// https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/
// p: int, arr of ints, arr of ints
// r: string: 'YES' or 'NO'

function twoArrays(k, A, B) {
  // Write your code here
  let inverseA = A.sort((a, b) => a - b);
  let inverseB = B.sort((a, b) => b - a);
  for (let i in inverseA) {
    if (inverseA[i] + inverseB[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]

// twoArrays(A,B)
