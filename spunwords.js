function spinWords(string) {
  let string_array = string.split(" ");
  let new_string_array = [];
  for (let i = 0; i < string_array.length; i++) {
    if (string_array[i].length >= 5) {
      let rev_word = string_array[i].split("").reverse().join("");
      new_string_array.push(rev_word);
    } else if (string_array[i].length < 5) {
      new_string_array.push(string_array[i]);
    }
  }
  return new_string_array.join(" ");
}

let res = spinWords("Hey fellow warriors");

console.log(res);
