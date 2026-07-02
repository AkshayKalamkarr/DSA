function hello(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
console.log(hello([23, 65, 87, 53, 80, 42]));
