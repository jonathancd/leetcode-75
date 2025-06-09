Implement a first-in-first-out (FIFO) queue using only two stacks.
Your implementation should support the following operations:

enqueue(x) — Push element x to the back of the queue.

dequeue() — Remove the element from the front of the queue and return it.

peek() — Return the element at the front of the queue.

empty() — Return true if the queue is empty, otherwise false.

🔢 Input / Output
You will be given a series of method calls on your queue.
You must simulate the queue's behavior using only two stacks.

💡 Example
Input:
["MyQueue", "enqueue", "enqueue", "peek", "dequeue", "empty"]
[[],        [1],       [2],       [],     [],        []]

Output:
[null, null, null, 1, 1, false]
💡 Approach
We simulate a queue with two stacks:

inStack — used to store incoming elements.

outStack — used to reverse the order for dequeue/peek.

🔁 Core Idea:
On dequeue() or peek(), move all elements from inStack to outStack only when outStack is empty. This preserves the correct order.
