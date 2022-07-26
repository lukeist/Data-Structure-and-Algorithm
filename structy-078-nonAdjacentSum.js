// https://structy.net/problems/non-adjacent-sum

// p: arr of nums
// r: num (max sum)
// e: [2, 4, 5, 12, 7] => 4 + 12 = 16
//     2     5      7
//     2        12
//        4     12
//           5      7

// e: [7, 5, 5, 12, 17, 29] => 7 + 12 + 29 = 48
//     7  x  5  x   17  x
//     7  x  x  12  x   29
//     7  x  x  x   17  x

// f(n) return max sum of non-adj-numbers
// base cases: arr.length = 3 => max = f(1), f(0) + f(2))

// recurrent func f(n) =  maxSum(n + f(n-2), n + f(n-3),... , n + f(1), f(n-1) )
// order: bottom up
// f(n)

const nonAdjacentSum = (nums) => {
  // const map = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    // if (!(num in map)) {
    //     map[num] =
    // }
  }
};
