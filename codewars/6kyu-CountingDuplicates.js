function duplicateCount(text) {
  let count = 0;
  let textArr = text.toLowerCase().split("");

  for (let i = 0; i < text.length; i++) {
    if (i !== textArr.lastIndexOf(textArr[i]) && textArr[i] !== null) {
      count++;
      textArr = textArr.map((value) =>
        value === textArr[i] ? (value = null) : value
      );
    }
  }
  return count;
}

duplicateCount("Indivisibilities");
