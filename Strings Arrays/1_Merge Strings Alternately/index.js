/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const merged = new Array(word1.length + word2.length);
  let i = 0,
    j = 0,
    k = 0;

  while (i < word1.length && j < word2.length) {
    merged[k++] = word1[i++];
    merged[k++] = word2[j++];
  }

  while (i < word1.length) merged[k++] = word1[i++];
  while (j < word2.length) merged[k++] = word2[j++];

  return merged.join("");
};
