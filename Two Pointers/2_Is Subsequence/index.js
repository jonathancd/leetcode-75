/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
};

/////////////////////////////////////////////////////////////

/**
 * Preprocesa t una sola vez
 */
function createIndexMap(t) {
  const indexMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!indexMap.has(char)) indexMap.set(char, []);
    indexMap.get(char).push(i);
  }

  return indexMap;
}

/**
 * Evalúa un solo s contra el t ya procesado
 */
function isSubsequenceWithMap(s, indexMap) {
  let prevIndex = -1;

  for (let char of s) {
    if (!indexMap.has(char)) return false;

    const positions = indexMap.get(char);
    const nextPos = findNextIndex(positions, prevIndex);

    if (nextPos === -1) return false;
    prevIndex = nextPos;
  }

  return true;
}

/**
 * Búsqueda binaria para encontrar el índice más cercano mayor a `prevIndex`
 */
function findNextIndex(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      result = arr[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

/**
 * Función principal que simula muchas llamadas a isSubsequence
 */
function processManyS(listOfS, t) {
  const indexMap = createIndexMap(t);
  const results = [];

  for (const s of listOfS) {
    results.push(isSubsequenceWithMap(s, indexMap));
  }

  return results;
}
