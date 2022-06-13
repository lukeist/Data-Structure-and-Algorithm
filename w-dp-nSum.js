// https://www.youtube.com/watch?v=KTDwvph8Tzo

const nSum = (n) => {
  const arr = Array.from(Array(n));
  arr[0] = 0;
  //   console.log(arr);
  for (let i = 1; i <= n; ++i) {
    arr[i] = arr[i - 1] + i;
  }
  console.log(arr[n]);
};

nSum(5);
