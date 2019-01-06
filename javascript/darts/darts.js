export const solve = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null
  } else if (x > 10 || y > 10) {
    return 0
  } else if (x === 10 || y === 10) {
    return 1
  } else if ((x > 1 && x < 5) && (y > 1 && y < 5) || x === 5 || y === 5) {
    return 5
  } else {
    return 10
  }
}

// Alternate solution:
const solve = (x, y) =>  {
  if (![x, y].every(n => Number(n) === n)) { return null; }

  const max = Math.max(x, y);

  if (max <= 1)  { return 10; }
  if (max <= 5)  { return 5; }
  if (max <= 10) { return 1; }

  return 0;
};
