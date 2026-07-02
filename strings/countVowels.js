function vowels(str) {
  let vow = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vow.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(vowels("akshay"));
