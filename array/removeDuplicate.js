function removeDuplicate(nums) {
  return [...new Set(nums)];
}
console.log(removeDuplicate([1, 1, 2]));
