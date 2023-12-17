// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// parameters: string
// return string /
// examples: 's' => 's' / 'abc' => 'b' / 'abcd' => 'bc' / 'abcde' => 'c' / 'abcdefghij' => 'ef'
const getMiddle = (s) => {
  const sLength = s.length;
  console.log(s.slice(sLength / 2 - 1, sLength / 2 + 1));
  console.log(s.slice(Math.floor(sLength / 2), Math.floor(sLength / 2) + 1));
  return sLength % 2 === 0
    ? s.slice(sLength / 2 - 1, sLength / 2 + 1)
    : s.slice(Math.floor(sLength / 2), Math.floor(sLength / 2) + 1);
};

getMiddle("testing");
