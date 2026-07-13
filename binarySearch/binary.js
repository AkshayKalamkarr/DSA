let arr = [1, 2, 3, 4, 5, 6, 7];
if (index === -1) console.log("Not Found");
else console.log("Target Found at index:", index);

let index = binarySearch(arr, 0, arr.length - 1, 5);

function binarySearch(arr, first, last, target) {
  if (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return -1;
}
