Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

A string is considered valid if:

Open brackets are closed by the same type of brackets.

Open brackets are closed in the correct order.

Every closing bracket has a corresponding open bracket before it.

🔢 Input
A string s, length 1 <= s.length <= 10^4

Only characters: '(', ')', '{', '}', '[', ']'

🔙 Output
Return true if the string is valid, otherwise false.

💡 Examples
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true

💡 Approach
Use a stack to keep track of the most recent open brackets.

When you see an open bracket, push it onto the stack.

When you see a closing bracket, check if the top of the stack matches it. If it doesn't — return false.
