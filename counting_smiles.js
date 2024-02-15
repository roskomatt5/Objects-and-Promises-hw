//return the total number of smiling faces in the array
function countSmileys(arr) {
  let valid_eyes = [":", ";"];
  let valid_nose = ["-", "~"];
  let valid_mouth = [")", "D"];
  let is_valid = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].length === 2 &&
      valid_eyes.includes(arr[i][0]) &&
      valid_mouth.includes(arr[i][1])
    ) {
      is_valid.push(arr[i]);
    } else if (
      arr[i].length === 3 &&
      valid_eyes.includes(arr[i][0]) &&
      valid_nose.includes(arr[i][1]) &&
      valid_mouth.includes(arr[i][2])
    ) {
      is_valid.push(arr[i]);
    }
  }
  if (is_valid.length === 0) {
    return 0;
  } else return is_valid.length;
}

let res = countSmileys([":)", ";(", ";}", ":-D"]);

console.log(res);
