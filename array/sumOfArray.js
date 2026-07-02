function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArr([23, 65, 87, 53, 80, 42]));
