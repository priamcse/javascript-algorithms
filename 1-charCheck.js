// character count in a word or input and see if all input characters are unique or not
function charCount(input) {
  let obj = {};
  for (let ch of input) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}
function checkAllCharsUnique(res) {
  return Object.values(res).every((item) => item === 1);
}
const res = charCount("Priam");
console.log(res);
const res2 = checkAllCharsUnique(res);
res2
  ? console.log("All characters are unique")
  : console.log("All characters are not unique");

// Output
// { P: 1, r: 1, i: 1, a: 1, m: 1 }
// All characters are unique
