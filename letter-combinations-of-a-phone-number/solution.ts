function letterCombinations(digits: string): string[] {
  const m = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const r: string[] = [];
  const q = [""];

  while (q.length > 0) {
    let cr = q.shift()!;

    if (cr.length === digits.length) {
      r.push(cr);
    } else {
      const d = digits[cr.length];

      for (const l of m[d]) {
        q.push(cr + l);
      }
    }
  }

  return r;
}

