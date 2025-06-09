You are given:

An array boards[], where each element represents the length of a board to be painted.

An integer k, representing the number of painters available.

Each painter can only paint contiguous boards, and all painters work at the same speed:
1 unit of time per unit length of board.

Your task is to assign the boards to the painters in a way that minimizes the total time needed to paint all boards.

Return the minimum time required to paint all the boards using at most k painters.

🔢 Input
boards: an array of positive integers where boards[i] is the length of the i-th board

k: an integer, the number of painters

Constraints:

1 <= boards.length <= 100000

1 <= boards[i] <= 10000

1 <= k <= 100000

🔙 Output
Return an integer: the minimum total time required to paint all boards using at most k painters

💡 Example
Input:
boards = [10, 20, 30, 40]
k = 2

Output:
60
Explanation:
One possible assignment:

Painter 1: [10, 20, 30] → total = 60

Painter 2: [40] → total = 40

The time to complete the job is determined by the slowest painter → max(60, 40) = 60

This is the minimum possible maximum time

⚠️ Rules
Painters cannot skip boards or paint in parallel on the same board.

Boards must be assigned in order.

The final result is the maximum workload assigned to any painter.

💡 Approach: Binary Search on Answer
We use binary search to find the smallest maximum time a painter can be assigned such that the job is completed with ≤ k painters.

🔁 Binary Search Range
left = max(boards)
→ One painter must handle the longest board at minimum

right = sum(boards)
→ One painter does all the work

🔧 Predicate Function: canPaint(limit)

function canPaint(limit) {
let painters = 1;
let total = 0;

for (let len of boards) {
if (total + len > limit) {
painters++;
total = 0;
}
total += len;
}

return painters <= k;
}
This function checks whether the boards can be divided among k painters such that no painter paints more than limit units of work.

🧠 Time & Space Complexity
Metric Value
Time O(n \* log(sum - max))
Space O(1)

Where:

n = boards.length

sum = total of all boards

max = longest board
