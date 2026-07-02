function isSecondMax(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(isSecondMax([23, 65, 87, 53, 80, 42]));
