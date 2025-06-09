function moveZeroes(nums) {
  let nonZero = 0;

  // First pass: move non-zeros to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZero] = nums[i];
      nonZero++;
    }
  }

  // Second pass: fill the rest with zeroes
  for (let i = nonZero; i < nums.length; i++) {
    nums[i] = 0;
  }
}
