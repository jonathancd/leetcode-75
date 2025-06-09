Given a string s, find the length of the longest substring without repeating characters.

You must solve this problem using the sliding window technique with optimal time complexity (O(n)).

🔢 Input
A string s with length 0 <= s.length <= 5 \* 10^4.

The string contains only printable ASCII characters.

🔙 Output
An integer representing the length of the longest substring without repeating characters.

💡 Examples
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke". Note that the answer must be a substring, not a subsequence.
⚠️ Constraints
Do not use brute force (e.g. checking all substrings).

Avoid nested loops if possible.

Aim for O(n) time complexity.

💡 Key Idea: Sliding Window
Use a Set to store unique characters in the current window.
Slide the right pointer forward, and if a duplicate is found, move the left pointer until the window is valid again.
