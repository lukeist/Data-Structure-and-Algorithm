// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// p: arr of num
// r: arr of num
// e:
// [7,1,9] => [1,7,9]
// [9,2,6,7] => [7,2,6,9]

function sortArray(array) {
  //
  // return array.sort((a, b) => a % 2 !== 0 && b % 2 !== 0 && a - b);
  // new arr =  filter & sort [...array]
  //
  const arrOdd = [...array].filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array.splice(i, 1, arrOdd[0]);
      arrOdd.shift();
    }
  }

  return array;
}

sortArray([5, 3, 2, 8, 1, 4, 11]);
//better   return array.map((x) => x % 2 ? odd.shift() : x);
