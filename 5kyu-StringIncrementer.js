// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  // return incrementedString
  const regexOnlyNum = /\D+/g;
  const regexOnlyStr = /\d+/g;

  const stringOfStringFromStr = str.replace(regexOnlyStr, "");
  const stringOfNumberFromStr = str.replace(regexOnlyNum, "");
  const stringOfNumberFromStrLength = stringOfNumberFromStr.length;

  const incrementedNum = +stringOfNumberFromStr + 1;
  const incrementedNumToString = incrementedNum.toString();
  const incrementedNumToStringLength = incrementedNumToString.length;

  const lengthOfNumberWithoutincrementedNum =
    stringOfNumberFromStrLength - incrementedNumToStringLength;
  const strOfNumberWithoutincrementedNum = stringOfNumberFromStr.slice(
    0,
    lengthOfNumberWithoutincrementedNum < 0
      ? 0
      : lengthOfNumberWithoutincrementedNum
  );

  const newStr =
    stringOfStringFromStr +
    strOfNumberWithoutincrementedNum +
    incrementedNumToString;

  console.log(
    stringOfStringFromStr,
    stringOfNumberFromStr,
    incrementedNumToString,
    incrementedNumToString.length,
    newStr
  );
  return newStr;
}
