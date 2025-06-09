function shipWithinDays(weights, D) {
  let left = Math.max(...weights); // can't be lower than the heaviest package
  let right = weights.reduce((a, b) => a + b, 0); // total weight is the upper bound

  const canShip = (capacity) => {
    let days = 1;
    let current = 0;

    for (let w of weights) {
      if (current + w > capacity) {
        days++;
        current = 0;
      }
      current += w;
    }

    return days <= D;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canShip(mid)) {
      right = mid; // mid might work, try smaller
    } else {
      left = mid + 1; // mid is too small
    }
  }

  return left;
}
