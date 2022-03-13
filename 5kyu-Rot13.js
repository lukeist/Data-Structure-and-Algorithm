function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let str = "";

  for (v of message) {
    let indexV = alphabet.indexOf(v.toLowerCase());

    if (indexV < 0) {
      str += v;
    } else {
      let newIndex = indexV === -1 ? -1 : (indexV + 13) % 26;
      console.log(v, indexV, newIndex);
      v !== v.toLowerCase()
        ? (str += alphabet[newIndex].toUpperCase())
        : (str += alphabet[newIndex]);
    }
  }
  return str;
}

rot13("Ruby is cool!");
// Ruby is cool! , Expected Output: Ehol vf pbby! , Actual Output: Eholmvfmpbbym
// Input: 10+2 is twelve. , Expected Output: 10+2 vf gjryir. , Actual Output: mmmmmvfmgjryirm
