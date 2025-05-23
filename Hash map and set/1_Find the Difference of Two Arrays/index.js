/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const res1 = [...set1].filter((n) => !set2.has(n));
  const res2 = [...set2].filter((n) => !set1.has(n));

  return [res1, res2];
};

///////////////////////////////////////////////////////////////////

var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const res1 = [];
  const res2 = [];

  for (const num of set1) {
    if (!set2.has(num)) res1.push(num);
  }

  for (const num of set2) {
    if (!set1.has(num)) res2.push(num);
  }

  return [res1, res2];
};
