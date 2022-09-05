// p: arr, num
// r: arr

const pairSum = (numbers, targetSum) => {
  const map = {};

  for (i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const n = targetSum - num;

    if (n in map) return [map[n], i];
    map[num] = i;
  }

  // j  n89r[[/;='p-oghu-]
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]

// 3: 0
// 2: 1
// 5: 2
