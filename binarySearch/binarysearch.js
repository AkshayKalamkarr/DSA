let arr = [1, 2, 3, 4, 5, 6, 7];

console.log("Array:", arr);

let index = binarySearch(arr, 0, arr.length - 1, 5);

console.log("Returned Index:", index);

if (index === -1) console.log("Not Found");
else console.log("Target Found at index:", index);

function binarySearch(arr, first, last, target) {
  console.log("First =", first);
  console.log("Last =", last);
  console.log("Target =", target);

  while (first <= last) {
    console.log("\n---------------------------");
    console.log("Current first =", first);
    console.log("Current last =", last);

    let mid = Math.floor((first + last) / 2);

    console.log("Mid =", mid);
    console.log("Middle Value =", arr[mid]);

    if (arr[mid] == target) {
      console.log("✅ Target Found!");
      return mid;
    } else if (arr[mid] > target) {
      console.log(arr[mid], ">", target);
      console.log("Move Left");

      last = mid - 1;

      console.log("New last =", last);
    } else {
      console.log(arr[mid], "<", target);
      console.log("Move Right");

      first = mid + 1;

      console.log("New first =", first);
    }
  }

  console.log("Target Not Found");

  return -1;
}
