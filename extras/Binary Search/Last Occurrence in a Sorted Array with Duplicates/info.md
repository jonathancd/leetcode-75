You are given a sorted array of integers nums, which may contain duplicate values, and an integer target.
Return the index of the last occurrence of target in the array.
If the target is not found, return -1.

🔢 Input
nums: an array of integers in non-decreasing order

target: an integer to find

Constraints:

1 <= nums.length <= 10^5

-10^4 <= nums[i], target <= 10^4

🔙 Output
An integer: the index of the last appearance of target, or -1 if not found.

💡 Examples
Input: nums = [1, 2, 2, 2, 3, 4], target = 2
Output: 3
Explanation: The last occurrence of `2` is at index 3.

Input: nums = [1, 1, 1, 1, 1], target = 1
Output: 4

Input: nums = [1, 3, 5, 7], target = 4
Output: -1

💡 Approach
Use binary search, but when you find nums[mid] === target, don’t return immediately.
Instead:

Save the index as a potential answer

Keep searching to the right (left = mid + 1) to find the latest occurrence

🧠 Time & Space Complexity
Metric Value
Time O(log n)
Space O(1)
