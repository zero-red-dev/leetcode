function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;
  const a = Array(numRows).fill("");
  let cr = 0, isUp = true;

  s.split("").forEach((c) => {
    a[cr] += c;
    if (cr === 0 || cr === numRows - 1) isUp = !isUp;

    cr = !isUp ? cr + 1 : cr - 1;
  });

  return a.join("");
}
