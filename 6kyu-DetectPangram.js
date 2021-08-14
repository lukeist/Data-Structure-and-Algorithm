// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// p: string
// r: boolean / not print
// e: '"The quick brown fox jumps over the lazy dog."  => T
// 'asdlfasdf' => F

// function isPangram(string) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   // convert string to lowercase()
//   string = string.toLowerCase();
//   console.log(string);
//   // loop through string, check if each character is in alphabet
//   // remove matched char from alphabet
//   for (char of string) {
//     alphabet.includes(char) && (alphabet = alphabet.replace(char, ""));
//     console.log(alphabet.includes(char), alphabet);
//   }
//   // conditionals: if alphabet length === 0 return true
//   return alphabet.length === 0;
// }

isPangram("The quick brown fox jumps over the lazy dog");

// better:
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // convert string to lowercase()
  string = string.toLowerCase();
  return alphabet.split("").every((c) => string.includes(c));
}
