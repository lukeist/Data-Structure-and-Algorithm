// p: arr, num
// r: arr

const pairProduct = (numbers, targetProduct) => {
  // todo
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const div = targetProduct / num;

    if (div in map) return [map[div], i];
    map[num] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
