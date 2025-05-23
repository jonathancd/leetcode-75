/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

var reverseWords2 = function (s) {
  let result = [];
  let i = s.length - 1;

  while (i >= 0) {
    while (i >= 0 && s[i] === " ") i--;

    if (i < 0) break;

    let end = i;

    while (i >= 0 && s[i] !== " ") i--;

    let start = i + 1;
    let word = s.slice(start, end + 1);
    result.push(word);
  }

  return result.join(" ");
};
