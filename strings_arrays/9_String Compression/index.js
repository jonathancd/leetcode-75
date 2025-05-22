/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0,
    read = 0;

  while (read < chars.length) {
    let currentChar = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] == currentChar) {
      count++;
      read++;
    }

    chars[write++] = currentChar;

    if (count > 1) {
      for (const digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  chars.length = write;
  return write;
};
