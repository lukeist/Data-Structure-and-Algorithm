// p: array, number;
// r: array
// e:
//       0  1  2  3
//      [3, 2, 5, 4, 1], 8); // -> [1, 3]
// map  8/3 4 8/5
//
//       0  1  2  3  4
//      [4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
// map  5/4          1

const pairProduct = (numbers, targetProduct) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    console.log(map);
    if (num in map) return [map[num], i];
    map[targetProduct / num] = i;
  }
};

pairProduct([4, 7, 9, 2, 5, 1], 5);
