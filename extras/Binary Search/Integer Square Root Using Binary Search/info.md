Given a non-negative integer x, return the integer part of its square root (rounded down).

Do not use any built-in exponent or square root functions like Math.sqrt().

🔢 Input
An integer x such that 0 <= x <= 2^31 - 1

🔙 Output
Return an integer: the floor of the square root of x.

💡 Examples
Input: x = 4
Output: 2

Input: x = 8
Output: 2
// Explanation: sqrt(8) is approximately 2.8284, so the integer part is 2

Input: x = 0
Output: 0

💡 Approach
Use binary search between 0 and x:

Set left = 0, right = x

At each step, compute mid

If mid \* mid === x, return mid

If mid \* mid < x, move left up (left = mid + 1) and store mid as potential result

If mid \* mid > x, move right down (right = mid - 1)

Return the last valid result

🧠 Complexity
Metric Value
Time O(log x) ✅
Space O(1)
