// https://www.codewars.com/kata/58d5e6c114286c8594000027/train/javascript

// p: arr of int +
// r: arr
// e:
// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],
// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

function arrayManip(array) {
  const result = [];
  // loop all num
  while (array.length > 0) {
    //// new arr =  filter nums > num ==> if no result return -1
    //// get min of this new arr
    //// splice num with min
    const resultNum = Math.min(...array.filter((n) => n > array[0]));
    result.push(resultNum === Infinity ? -1 : resultNum);
    array.splice(0, 1);
    console.log(array);
  }

  return result;
}

arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]);
// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].
// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1];
