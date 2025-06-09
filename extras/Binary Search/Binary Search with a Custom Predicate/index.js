function findMinValid(low, high, isValid) {
  let result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (isValid(mid)) {
      result = mid;
      high = mid - 1; // look for smaller valid value
    } else {
      low = mid + 1;
    }
  }

  return result;
}
