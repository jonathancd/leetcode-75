/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const freq1 = new Map();
  const freq2 = new Map();

  for (let ch of word1) {
    freq1.set(ch, (freq1.get(ch) || 0) + 1);
  }

  for (let ch of word2) {
    freq2.set(ch, (freq2.get(ch) || 0) + 1);
  }

  const set1 = new Set(freq1.keys());
  const set2 = new Set(freq2.keys());

  if (!setsAreEqual(set1, set2)) return false;

  const values1 = [...freq1.values()].sort((a, b) => a - b);
  const values2 = [...freq2.values()].sort((a, b) => a - b);

  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i]) return false;
  }

  return true;
};

function setsAreEqual(setA, setB) {
  if (setA.size != setB.size) return false;
  for (let item of setA) {
    if (!setB.has(item)) return false;
  }

  return true;
}
