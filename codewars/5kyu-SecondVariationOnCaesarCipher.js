// https://www.codewars.com/kata/55084d3898b323f0aa000546/train/javascript
const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";

const stringMap = (s, shift) => {
  const alphabetLength = 26;
  const alphabetUpperCase = alphabetLowerCase.toUpperCase();
  return s
    .split("")
    .map((char) =>
      alphabetLowerCase.indexOf(char) < 0 && alphabetUpperCase.indexOf(char) < 0
        ? char
        : char !== char.toLowerCase()
        ? alphabetUpperCase[
            (alphabetUpperCase.indexOf(char) + shift) % alphabetLength
          ]
        : alphabetLowerCase[
            (alphabetLowerCase.indexOf(char) + shift) % alphabetLength
          ]
    )
    .join("");
};

function encodeStr(s, shift) {
  // add prefix
  const firstLetter = s[0].toLowerCase();
  const secondLetter =
    alphabetLowerCase[(alphabetLowerCase.indexOf(firstLetter) + shift) % 26];
  const prefix = firstLetter + secondLetter;

  // map through s to s+shift
  s = prefix + stringMap(s, shift);

  const sLength = s.length;

  // split s to 5 strings
  let splitArr = [];
  let allNumsThatFit5Array = [];
  let numOfCharInEachOfFirst4Arrays = 0;
  let numOfCharInLastArr = 0;
  if (sLength % 5 === 0) {
    numOfCharInEachOfFirst4Arrays = sLength / 5;
  } else {
    for (let i = sLength % 4; i < sLength / 4; i++) {
      numOfCharInEachOfFirst4Arrays = (sLength - i) / 4;
      if (
        numOfCharInEachOfFirst4Arrays > i &&
        Number.isInteger(numOfCharInEachOfFirst4Arrays)
      ) {
        allNumsThatFit5Array.push(numOfCharInEachOfFirst4Arrays);
      }
    }
    numOfCharInEachOfFirst4Arrays = Math.min(...allNumsThatFit5Array);
  }

  for (let i = 0; i < sLength; i += numOfCharInEachOfFirst4Arrays) {
    splitArr.push(s.slice(i, i + numOfCharInEachOfFirst4Arrays));
  }

  console.log(s.length, splitArr);

  return splitArr;
}

function decode(arr) {
  let s = arr.join("");
  const prefix = s.slice(0, 2);
  const prefixCharAt1 = alphabetLowerCase.indexOf(prefix.charAt(1));
  const prefixCharAt0 = alphabetLowerCase.indexOf(prefix.charAt(0));

  const shift = prefixCharAt1 - prefixCharAt0;
  s = s.slice(2);
  s = stringMap(s, -1 * shift);

  console.log(s, shift);
  return s;
}

const u =
  "I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)";
//   "For you bouquets and ribbon'd wreaths--for you the shores a-crowding;";
// const u = "O CAPTAIN! my Captain! our fearful trip is done;";
// const u = "I should have known that you would have a perfect answer for me!!!";
// const u = "123456789012345";
encodeStr(u, 25);

decode(encodeStr(u, 25));
