You are given a sorted array that has been rotated at some unknown pivot.
Implement a function to search for a given target value and return its index.
If the target is not found, return -1.

You must achieve O(log n) time complexity.

🔢 Input
nums: a rotated array of distinct integers, originally sorted in ascending order.

target: an integer to search for.

Constraints:

1 <= nums.length <= 10^4

-10^4 <= nums[i], target <= 10^4

All integers are distinct.

🔙 Output
An integer: the index of the target, or -1 if not found.

💡 Examples
js
Copiar
Editar
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1
💡 Approach
Even though the array is rotated, it is still composed of two sorted halves.
Use binary search and apply logic to decide which half is sorted, then narrow down.

Steps:

Find mid

Check which side is sorted

Decide if target is in the sorted half — if yes, continue there. If not, go to the other half.

🧠 Complexity Analysis
Metric Value
Time O(log n)
Space O(1)
