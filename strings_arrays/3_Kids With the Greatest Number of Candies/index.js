/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= max);
};

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies2 = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }

  return result;
};
