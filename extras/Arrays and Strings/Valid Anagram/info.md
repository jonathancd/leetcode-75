Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of another, using all original letters exactly once.

🔢 Input
Two strings s and t

1 <= s.length, t.length <= 10^5

Strings consist of lowercase English letters (a–z)

🔙 Output
A boolean: true if t is an anagram of s, otherwise false.

💡 Examples
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

Input: s = "aacc", t = "ccac"
Output: false

💡 Approach
Use a frequency map (or array) to count how many times each letter appears in both strings. If the frequencies match exactly, the strings are anagrams.

🔁 Constraints
Avoid sorting unless asked — sorting is O(n log n)

Prefer an O(n) solution with counting
