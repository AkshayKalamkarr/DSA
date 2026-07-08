function missingArr(arr) {
  let map = new Map();
  for (let num of arr) {
    map.set(num, true);
  }

  for (let i = 1; i < =arr.length + 1; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
}

console.log(missingArr(1, 2, 3, 5, 6));
