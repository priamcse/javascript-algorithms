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
