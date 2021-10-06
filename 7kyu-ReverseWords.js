// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// p: str
// r: str
// examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// "dou       spaces  dou       "      ==> "uod       secaps  uod       "

function reverseWords(str) {
  // convert each word to arrays of characters,
  // reverse() each word

  return str
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}
