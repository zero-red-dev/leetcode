function romanToInt(s: string): number {
  const m = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let v = 0;

  s.split("").forEach((d, i) => {
    const n = s.length > i + 1 ? s[i + 1] : null;
    v = n ? (m[d] >= m[n] ? v + m[d] : v - m[d]) : v + m[d];
  });

  return v;
}
