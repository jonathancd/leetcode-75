/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const chars = s.split("");
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0,
    right = chars.length;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;

    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
};
