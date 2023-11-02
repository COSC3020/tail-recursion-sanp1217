function fibTR(n, newFib = 1, oldFib = 0) {
  if (n === 0) return oldFib;

  return fibTR(n - 1, newFib + oldFib, newFib);
}
