function evenOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i] + " it is even number");
    } else {
      console.log(arr[i] + " it is odd number");
    }
  }
}

console.log(evenOdd([23, 65, 87, 53, 80, 42]));
