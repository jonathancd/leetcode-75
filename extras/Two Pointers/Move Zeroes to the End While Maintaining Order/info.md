Given an array nums, move all 0 values to the end of the array in-place while maintaining the relative order of the non-zero elements.

You must do this in O(n) time and with O(1) extra space.

🔢 Input
nums: an array of integers with length 1 <= nums.length <= 10^5

🔙 Output
Modify nums in-place so that all zeros are at the end and the relative order of non-zeros is preserved.

💡 Examples
js
Copiar
Editar
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Input: nums = [0]
Output: [0]

Input: nums = [1, 2, 3]
Output: [1, 2, 3]
💡 Approach: Two Pointers (Overwrite Strategy)
Use a nonZero pointer to keep track of where to write the next non-zero value.

Loop through the array:

If the current number is non-zero, write it at nums[nonZero] and increment nonZero

After the loop, fill the rest of the array with 0 from index nonZero onward.

🧠 Complexity
Metric Value
Time O(n)
Space O(1)
