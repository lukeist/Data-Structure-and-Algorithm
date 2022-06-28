// https://structy.net/problems/premium/uncompress

// p: str
// r: str
// e: uncompress("2c3a1t"); // -> 'ccaaat'

const uncompress = (s) => {
  let result = "";
  let indexOfLastChar = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let times = s.slice(indexOfLastChar, i);
    console.log(indexOfLastChar, times);

    if (char.toLowerCase() !== char.toUpperCase()) {
      result = result + char.repeat(times);
      indexOfLastChar = i + 1;
    }
  }

  console.log(result);
  return result;
};

// uncompress("2c3a1t");

uncompress("3n12e2z");
