function thirdMaxiNum(nums) {
  let sortArr = [...new Set(nums)].sort((a, b) => a - b);

  let count = 0;
  for (let i = 0 - 1; i < sortArr.length; i++) {
    count++;
    if (count === 3) {
      return sortArr[i];
    }
  }
}

console.log(thirdMaxiNum([59, 54, 13, 67, 46]));
