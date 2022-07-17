const validAnagram = (str1, str2) => {
  const str1Modified = frequency(str1);
  const str2Modified = frequency(str2);

  for (let key in str1Modified) {
    if (!(key in str2Modified)) {
      return false;
    }
    if (str1Modified[key] !== str2Modified[key]) {
      return false;
    }
  }
  return true;
};

const frequency = (str) => {
  return str.split("").reduce((accumulator, currentValue) => {
    accumulator[currentValue]
      ? accumulator[currentValue]++
      : (accumulator[currentValue] = 1);
    return accumulator;
  }, {});
};

const result = validAnagram("car", "rat");
console.log("====================================");
console.log(result);
console.log("====================================");

// check valid anagram or not

function validAnagram2(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  function strArray(str) {
    return str.split("");
  }
  const str1Array = strArray(str1);
  const str2Array = strArray(str2);
  for (let item of str1Array) {
    obj1[item] = (obj1[item] || 0) + 1;
  }
  for (let item of str2Array) {
    obj2[item] = (obj2[item] || 0) + 1;
  }
  console.log(obj1, obj2);
  // Check obj1 === obj2 or not
  for (let key in obj1) {
    console.log(obj1[key], obj2[key]);
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
const res = validAnagram2("texttwisttime", "timetwisttext");
console.log(res);
