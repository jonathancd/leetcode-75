/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let ast of asteroids) {
    let destroyed = false;

    while (stack.length > 0 && stack[stack.length - 1] > 0 && ast < 0) {
      const prevAst = stack[stack.length - 1];

      if (prevAst < -ast) {
        stack.pop();
      } else if (prevAst > -ast) {
        destroyed = true;
        break;
      } else {
        stack.pop();
        destroyed = true;
        break;
      }
    }

    if (!destroyed) {
      stack.push(ast);
    }
  }

  return stack;
};
