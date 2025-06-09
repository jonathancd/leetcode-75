function firstUniqChar(s) {
  const freq = new Map();

  // First pass: count frequencies
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Second pass: find first character with freq 1
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
