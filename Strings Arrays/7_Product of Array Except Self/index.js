/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const results = new Array(nums.length).fill(1);
  let leftProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return results;
};
