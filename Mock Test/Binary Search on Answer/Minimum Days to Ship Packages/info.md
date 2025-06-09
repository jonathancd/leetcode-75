You are given an array weights where weights[i] is the weight of the i-th package. You need to ship all packages within D days.

Each day, you can ship packages in the order they appear. You can only ship up to a certain capacity per day.

Return the minimum capacity needed to ship all the packages within D days.

🔢 Input
weights: an array of positive integers, representing package weights

D: an integer (number of days to complete shipping)

Constraints:

1 <= weights.length <= 50000

1 <= weights[i] <= 500

1 <= D <= weights.length

🔙 Output
Integer: the minimum capacity of the ship to deliver all packages in D days

💡 Examples
Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15

Explanation:
Ship capacity of 15 lets you do:

- Day 1: 1,2,3,4,5
- Day 2: 6
- Day 3: 7
- Day 4: 8
- Day 5: 9,10
  💡 Approach: Binary Search on Capacity
  Minimum capacity = max(weights)

Maximum capacity = sum(weights)

Do binary search between these two.

For each mid, check: can we ship in ≤ D days with this capacity?

function canShip(capacity) {
let days = 1;
let current = 0;

for (let w of weights) {
if (current + w > capacity) {
days++;
current = 0;
}
current += w;
}

return days <= D;
}

🧠 Complexity
Metric Value
Time O(n \* log(sum - max))
Space O(1)
