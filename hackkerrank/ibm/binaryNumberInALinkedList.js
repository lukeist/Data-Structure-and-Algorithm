// p: head of ll
// r: decimal num
// e: 0 -> 1 -> 0 -> 0 -> 1 -> 1
// -> 010011
function getNumber(binary) {
  let c = binary;
  let s = "";

  while (c) {
    s += c.data;
    c = c.next;
  }

  return BigInt("0b" + s);
}
