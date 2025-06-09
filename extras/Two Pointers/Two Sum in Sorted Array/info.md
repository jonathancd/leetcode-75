You are given a sorted array of integers numbers and a target integer.
Return the 1-based indices of the two numbers such that they add up to the target.
You must use the two-pointer technique, and solve it in O(n) time.

🔢 Input
numbers: an array of integers sorted in ascending order

target: an integer such that there exists exactly one solution

Constraints:

2 <= numbers.length <= 10^5

-10^4 <= numbers[i], target <= 10^4

You must not use the same element twice

🔙 Output
Return an array of two integers: the 1-based indices of the numbers that sum to the target

💡 Examples
js
Copiar
Editar
Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]
// Explanation: numbers[0] + numbers[1] = 2 + 7 = 9

Input: numbers = [1, 2, 3, 4, 4, 9, 56, 90], target = 8
Output: [4, 5]

Input: numbers = [-3, -1, 0, 2, 4, 5], target = 3
Output: [2, 6]
💡 Approach: Two Pointers
Use two pointers:

left = 0 (start of the array)

right = numbers.length - 1 (end of the array)

While left < right:

If numbers[left] + numbers[right] === target, return [left + 1, right + 1]

If the sum is too small → left++

If the sum is too big → right--

🧠 Complexity
Metric Value
Time O(n)
Space O(1)
