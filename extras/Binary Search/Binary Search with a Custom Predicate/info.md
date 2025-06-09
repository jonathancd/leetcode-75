You are given a monotonic boolean function isValid(x) that returns:

false for all x < minValid

true for all x >= minValid

Your task is to find the smallest integer x such that isValid(x) returns true, within a given range [low, high].

🔢 Input
A function isValid(x)

Two integers: low and high, defining the search range

🔙 Output
The minimum value x such that isValid(x) is true

Return -1 if no such value exists in the range

💡 Example (conceptual)
// Let's say this is our hidden function:
function isValid(x) {
return x >= 37;
}

Input: low = 0, high = 100
Output: 37

💡 Approach
This is a classic Binary Search on Answer problem.

You do not have an array.

You are searching the smallest x where a condition becomes true.

This pattern is common in:

Scheduling

Optimization

Minimum speed/capacity problems

🧠 Complexity
Metric Value
Time O(log(high - low))
Space O(1)
