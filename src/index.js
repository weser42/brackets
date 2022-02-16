module.exports = function check(str, bracketsConfig) {
  let a = str.length;
  for (let i in str) {
    if (a > 1) {
      for (let j = 0; j < a; j++) {
        for (let k of bracketsConfig) {
          if (str[j] == k[0]) {
            if (str[j + 1] == k[1]) {
              str = str.slice(0, j) + str.slice(j + 2);
            }
          }
        }
      }
    }
  }
  return str == "" ? true : false;
};
