function minTimeToPaint(boards, k) {
  let left = Math.max(...boards); // no painter can paint less than the largest board
  let right = boards.reduce((a, b) => a + b, 0); // one painter paints everything

  const canPaint = (maxWork) => {
    let painters = 1;
    let current = 0;

    for (let board of boards) {
      if (current + board > maxWork) {
        painters++;
        current = 0;
      }
      current += board;
    }

    return painters <= k;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canPaint(mid)) {
      right = mid; // try smaller max workload
    } else {
      left = mid + 1; // need more room
    }
  }

  return left;
}
