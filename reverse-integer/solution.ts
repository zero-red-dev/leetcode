function reverse(x: number): number {
  const r =
    x < 0
      ? +String(Math.abs(x)).split("").reverse().join("") * -1
      : +String(x).split("").reverse().join("");

  // -2^31 <= r <= 2^31 - 1
  return -2147483648 <= r && r <= 2147483647 ? r : 0;
}

