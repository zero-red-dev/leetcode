function divide(dividend: number, divisor: number): number {
  const r = dividend / divisor;

  // -2^31
  if (r < -2147483648) return -2147483648;
  // 2^31 - 1
  if (r > 2147483647) return 2147483647;

  if (r < 0) return Math.ceil(r);
  else return Math.floor(r);
}

