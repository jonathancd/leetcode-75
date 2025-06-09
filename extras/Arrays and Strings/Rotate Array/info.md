Given an array of integers nums, rotate the array to the right by k steps, where k is a non-negative integer.

The rotation should be done in-place, meaning no extra array should be used for storing the result (constant space if possible). If k is greater than the array length, it should wrap around (i.e., k = k % nums.length).

🔢 Input
An integer array nums, where 1 <= nums.length <= 10^5

An integer k, where 0 <= k <= 10^5

🔙 Output
Modify the input array nums in-place, so that it is rotated k steps to the right.

💡 Examples
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]

Input: nums = [-1, -100, 3, 99], k = 2
Output: [3, 99, -1, -100]

⚠️ Constraints
Do not use extra space for another array.

Time complexity should be close to O(n).

💡 Approach: Reverse Segments
To rotate the array in-place, we can:

Reverse the entire array

Reverse the first k elements

Reverse the remaining n - k elements

This effectively shifts elements in-place without needing a temp array.
