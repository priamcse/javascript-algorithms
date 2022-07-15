var isPalindrome = function (x) {
  const numToString = x.toString();
  const strToArray = numToString.split("");
  let reversedString = "";
  for (i = 0; i < numToString.length; i++) {
    reversedString += strToArray.pop();
  }
  if (numToString === reversedString) return true;
  return false;
};
// isPalindrome(121);
console.log(isPalindrome(10));