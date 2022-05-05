// https://www.codewars.com/kata/55084d3898b323f0aa000546/train/javascript
function encodeStr(s, shift) {
  const sTest = s;
  const alphabetLength = 26;
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabetLowerCase.toUpperCase();
  // add prefix
  const firstLetter = s[0].toLowerCase();
  const secondLetter =
    alphabetLowerCase[(alphabetLowerCase.indexOf(firstLetter) + shift) % 26];
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
  let numOfCharInEachOfFirst4Arrays = 0;
  let numOfCharInLastArr = 0;
  let allNumsThatFit5Array = [];
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
      //   console.log(sLength, i, numOfCharInEachOfFirst4Arrays);
    }
    numOfCharInEachOfFirst4Arrays = Math.min(...allNumsThatFit5Array);
  }
  //   console.log(allNumsThatFit5Array, numOfCharInEachOfFirst4Arrays);

  // 18  15
  // 18  15
  // 18  15
  // 18  15
  // 4   11
  // 76  71

  //   sLength / numOfCharInEachOfFirst4Arrays > 5
  //     ? (numOfCharInEachOfFirst4Arrays = sLength / 4)
  //     : numOfCharInEachOfFirst4Arrays;

  // numOfCharInLastArr = sLength - numOfCharInEachOfFirst4Arrays;
  for (let i = 0; i < sLength; i += numOfCharInEachOfFirst4Arrays) {
    splitArr.push(s.slice(i, i + numOfCharInEachOfFirst4Arrays));
  }

  // console.log(sLength, numOfCharInEachOfFirst4Arrays, numOfCharInLastArr);
  //   console.log(s);
  //   //   console.log(ss);
  console.log(s.length, splitArr);

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

const u =
  "I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)";
//   "For you bouquets and ribbon'd wreaths--for you the shores a-crowding;";
// const u = "O CAPTAIN! my Captain! our fearful trip is done;";
// const u = "I should have known that you would have a perfect answer for me!!!";
// const u = "123456789012345";
encodeStr(u, 25);
// const arr = [//71
//   "fgGps zpv cpvrvf", //17
//   "ut boe sjccpo'e x",//17
//   "sfbuit--gps zpv u",//17
//   "if tipsft b-dspxe",//17
//   "joh;",//3
// ];
// const arr = [
//   "fgGps zpv cpvrv", //15
//   "fut boe sjccpo'",//15
//   "e xsfbuit--gps ",//15
//   "zpv uif tipsft ",//15
//   "b-dspxejoh;",//11
// ];

const arr = [
  "ihndefinedH gzud roqdzc l",
  "x cqdzlr tmcdq xntq edds;",
  " Sqdzc rneskx adbztrd xnt",
  " sqdzc nm lx cqdzlr. Vhkk",
  "hzl A Xdzsr (1865-1939)",
];
// decode(encodeStr(u, -1));
decode(arr);
