function hello(str) {
  return str === str.split("").reverse().join("");
}

console.log(hello("madam"));
