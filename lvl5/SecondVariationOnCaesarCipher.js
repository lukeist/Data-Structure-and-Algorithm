// https://www.codewars.com/kata/55084d3898b323f0aa000546/train/javascript
function encodeStr(s, shift) {
  const sTest = s;
  const alphabetLength = 26;
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabetLowerCase.toUpperCase();
  // add prefix
  const firstLetter = s[0].toLowerCase();
  const secondLetter =
    alphabetLowerCase[alphabetLowerCase.indexOf(firstLetter) + shift];
  const prefix = firstLetter + secondLetter;

  // map through s to s+shift
  s =
    prefix +
    s
      .split("")
      .map((char) =>
        alphabetLowerCase.indexOf(char) < 0 &&
        alphabetUpperCase.indexOf(char) < 0
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

  const sLength = s.length;

  // split s to 5 strings
  let splitArr = [];
  let numOfCharInEachArr = 0;
  let numOfCharInLastArr = 0;

  if (sLength % 5 === 0) {
    numOfCharInEachArr = sLength / 5;
  } else {
    numOfCharInEachArr = sLength / 4 - (sLength % 5);
    numOfCharInLastArr = sLength - numOfCharInEachArr;
  }

  for (let i = 0; i < sLength; i += numOfCharInEachArr) {
    splitArr.push(s.slice(i, i + numOfCharInEachArr));
  }

  // console.log(sLength, numOfCharInEachArr, numOfCharInLastArr);
  //   console.log(s);
  //   //   console.log(ss);

  console.log(sTest.length);
  return splitArr;
}

function decode(arr) {
  const alphabetLength = 26;
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabetLowerCase.toUpperCase();
  // your code'
  let s = arr.join("");
  const prefix = s.slice(0, 2);
  const prefixCharAt1 = alphabetLowerCase.indexOf(prefix.charAt(1));
  const prefixCharAt0 = alphabetLowerCase.indexOf(prefix.charAt(0));

  const shift = prefixCharAt1 - prefixCharAt0;
  s = s
    .slice(2)
    .split("")
    .map((char) =>
      alphabetLowerCase.indexOf(char) < 0 && alphabetUpperCase.indexOf(char) < 0
        ? char
        : char !== char.toLowerCase()
        ? alphabetUpperCase[
            (alphabetUpperCase.indexOf(char) - shift) % alphabetLength
          ]
        : alphabetLowerCase[
            (alphabetLowerCase.indexOf(char) - shift) % alphabetLength
          ]
    )
    .join("");
  console.log(s, shift);
  return s;
}

// const u = "O CAPTAIN! my Captain! our fearful trip is donez";
const u = "I should have known that you would have a perfect answer for me!!!";

encodeStr(u, 1);
decode(encodeStr(u, 1));
