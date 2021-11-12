// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
// p: string '4 nums' or '6 nums'
// return: boolean / no consolelog
// examples:
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  //return true or false
  const num = "0123456789";
  if (pin.split("").filter((c) => !num.includes(c)).length !== 0) return false;
  return pin.length === 4 || pin.length === 6;
}
