function mySqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = x;
  let result = 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      result = mid; // store the floor candidate
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
