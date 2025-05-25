/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const n = senate.length;
  const queueD = [];
  const queueR = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      queueR.push(i);
    } else {
      queueD.push(i);
    }
  }

  while (queueD.length > 0 && queueR.length > 0) {
    const indexD = queueD.shift();
    const indexR = queueR.shift();

    if (indexD < indexR) {
      queueD.push(indexD + n);
    } else {
      queueR.push(indexR + n);
    }
  }

  return queueD.length > 0 ? "Dire" : "Radiant";
};
