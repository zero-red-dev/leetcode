function myAtoi(s: string): number {
  const r = Number(s.trim().match(/^[+-]?\d+/));

  // -2^31
  if (r < -2147483648) return -2147483648;
  // 2^31 - 1
  if (r > 2147483647) return 2147483647;
  return r;
}
