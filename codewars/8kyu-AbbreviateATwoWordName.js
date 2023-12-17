// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  console.log(name.split(" ")[0][0]);
  return (name.split(" ")[0][0] + "." + name.split(" ")[1][0]).toUpperCase();
  // code away
}

abbrevName("patrick feeney");
