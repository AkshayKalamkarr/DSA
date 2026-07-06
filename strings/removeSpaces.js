function hello(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      str1 = str1 + str[i];
    }
  }
  return str1;
}

console.log(hello("a k s h a y"));
