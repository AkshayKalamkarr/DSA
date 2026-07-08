let num = [1, 2, 3, 4, 5, 4, 3, 21,2, 3, 4, 3, 2, 4, 32, 1, 2, 3];

let map = new Map();
for (let nums of num) {
  map.set(nums, (map.get(nums) || 0) + 1);
}
console.log(map);
