function sumToN(n) {
  if (n < 0) {
      return null;
  }
  if (n === 0) {
      return 0;
  }
  return n + sumToN(n - 1);
}

sumToN(3)
