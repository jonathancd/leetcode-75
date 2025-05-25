/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const m = potions.length;
  const result = [];

  for (let spell of spells) {
    let left = 0,
      right = m - 1;
    const target = success / spell;
    let count = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (potions[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    count = m - left;
    result.push(count);
  }

  return result;
};
