// function isMax(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

// console.log(isMax([23, 65, 87, 53, 80, 42]));
