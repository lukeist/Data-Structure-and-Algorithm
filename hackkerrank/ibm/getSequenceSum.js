// p: 3 numbers (ints)
// r: number
// e:
// i = 5, j = 9, k = 6
// => 5 + 6 + 7 + 8 + 9 + 8 + 7 + 6 = 56

const getSequenceSum = (i, j ,k) => {
    let sum = 0;
    for (let x = i; x <= j; x++) {
        sum += x;
    }
    for (let x = j - 1; x >= k; x--) {
        sum += x;
    }
    return sum;
}
