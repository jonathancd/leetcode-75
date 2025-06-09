Given a string s, return the index of the first non-repeating character in it.
If there is no such character, return -1.

🔢 Input
A string s with length 1 <= s.length <= 10^5.

The string contains only lowercase English letters (a–z).

🔙 Output
An integer: the index of the first non-repeating character, or -1 if none exists.

💡 Examples
Input: "leetcode"
Output: 0
Explanation: 'l' is the first character that appears only once.

Input: "loveleetcode"
Output: 2
Explanation: 'v' is the first character that appears only once.

Input: "aabb"
Output: -1
Explanation: All characters are repeated.

⚠️ Constraints
You must aim for a linear time solution (O(n)).

Avoid nested loops — they can lead to timeouts on large inputs.

💡 Approach
We will use a two-pass strategy with a HashMap (or Map):

First pass → Count character frequencies.

Second pass → Find the first character with frequency 1.
