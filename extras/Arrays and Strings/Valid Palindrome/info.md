Dada una cadena, determina si se lee igual al derecho y al revés, ignorando mayúsculas y espacios.
Write a function that checks if a given string is a valid palindrome.

A string is considered a palindrome if it reads the same forward and backward after removing all non-alphanumeric characters and ignoring case differences.

🔢 Input
A string s, with length 1 <= s.length <= 10^5.

The string may contain letters (a-z, A-Z), digits (0-9), spaces, and special characters.

🔙 Output
Return true if s is a valid palindrome, otherwise return false.

💡 Examples
Input: "A man, a plan, a canal: Panama"
Output: true
Explanation: After cleaning and lowercasing, the string becomes "amanaplanacanalpanama".

Input: "race a car"
Output: false
Explanation: The cleaned version is "raceacar", which is not the same backward.

Input: "0P"
Output: false
Explanation: Lowercase cleaned version is "0p", which is not a palindrome.

⚠️ Constraints
You may not use .reverse() or any direct shortcut.

Try to solve the problem using the two-pointer technique.
