function spiralOrder(matrix) {
  const result = [];

  while (matrix.length > 0 && matrix[0].length > 0) {
    // right
    result.push(...matrix.shift());

    // down
    if (matrix.length > 0 && matrix[0].length > 0) {
      for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i].pop());
      }
    }

    // left
    if (matrix.length > 0 && matrix[0].length > 0) {
      result.push(...matrix.pop().reverse());
    }

    // up
    if (matrix.length > 0 && matrix[0].length > 0) {
      for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[i].shift());
      }
    }
  }

  return result;
}
