function rgb(r, g, b) {
  const hexadecimal = "0123456789ABCDEF";
  const converter = (v) => {
    if (v > 255) return "FF";
    if (v < 0) return "00";

    let two = hexadecimal[Math.floor(v / 16).toString()];
    two += hexadecimal[v % 16];
    return two;
  };

  //   console.log(converter(r) + converter(g) + converter(b));
  return converter(r) + converter(g) + converter(b);
}

rgb(148, 0, 211);
rgb(148, -1, 256);

// better solution: use .toString(16)????
