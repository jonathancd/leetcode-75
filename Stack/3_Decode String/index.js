/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numStack = [];
  const strStack = [];
  let currentStr = "";
  let currentNum = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      numStack.push(currentNum);
      strStack.push(currentStr);
      currentStr = "";
      currentNum = 0;
    } else if (char === "]") {
      const repeat = numStack.pop();
      const prevStr = strStack.pop();
      currentStr = prevStr + currentStr.repeat(repeat);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
};
