/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = new Map();

  for (let n of arr) {
    countMap.set(n, (countMap.get(n) || 0) + 1);
  }

  const seen = new Set();

  for (let n of countMap.values()) {
    if (seen.has(n)) return false;

    seen.add(n);
  }

  return true;
};
