function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  // Reverse entire array
  let start = 0,
    end = n - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  // Reverse first k elements
  start = 0;
  end = k - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  // Reverse the rest
  start = k;
  end = n - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
