You are given a sorted array of integers nums, which may contain duplicate values, and a target value.
Return the index of the first occurrence of target in the array.
If the target does not exist, return -1.

🔢 Input
nums: an array of integers in non-decreasing order (nums[i] <= nums[i+1])

target: an integer to search for

Constraints:

1 <= nums.length <= 10^5

-10^4 <= nums[i], target <= 10^4

🔙 Output
An integer: the index of the first occurrence of target, or -1 if not found.

💡 Examples
Input: nums = [1, 2, 2, 2, 3, 4], target = 2
Output: 1
Explanation: The target `2` first appears at index 1.

Input: nums = [1, 1, 1, 1, 1], target = 1
Output: 0

Input: nums = [1, 3, 5, 7], target = 2
Output: -1

💡 Approach
Use standard binary search logic, but when you find target, do not return immediately — instead:

Save the index as a possible answer

Keep searching to the left (right = mid - 1) to find an earlier occurrence

🧠 Time & Space Complexity
Aspect Value
Time O(log n)
Space O(1)
