// https://structy.net/problems/premium/pair-sum

// p: array + num
// r: array
// e: pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

const pairSum = (numbers, targetSum) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let firstNum = targetSum - num;

    if (firstNum in map) return [numbers.indexOf(firstNum), i];

    map[num] = i;
  }

  return [];
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2] // { '1': 7, '2': 6, '3': 5, '4': 4, '5': 3 }
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]

console.log(pairSum([9, 9], 18)); // -> [0, 1]) // { '9': 9 }
console.log(pairSum([9, 2, 4, 9], 18)); // -> [0, 1]) // { '9': 9 }

// const pairSum = (numbers, targetSum) => {
//     const map = {};

//     for (let num of numbers) {
//       map[num] = targetSum - num;
//     }

//     for (let i = 0; i < numbers.length; i++) {
//       let num = numbers[i];
//       numbers[i] = null;

//       if (numbers.includes(map[num])) {
//         return [i, numbers.indexOf(map[num])];
//       }
//     }

//     return [];
//   };
