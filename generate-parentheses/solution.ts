function generateParenthesis(n: number): string[] {
  const r: string[] = [];
  const q = [{ c: "", oc: 0, cc: 0 }];

  while (q.length > 0) {
    const { c, oc, cc } = q.shift()!;

    if (c.length === 2 * n) {
      r.push(c);
      continue;
    }

    if (oc < n) q.push({ c: c + "(", oc: oc + 1, cc });

    if (cc < oc) q.push({ c: c + ")", oc, cc: cc + 1 });
  }

  return r;
}

