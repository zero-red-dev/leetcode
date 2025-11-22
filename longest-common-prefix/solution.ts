function longestCommonPrefix(strs: string[]): string {
  const s = strs.sort();

  const bw = s[0];
  const ew = s[s.length - 1];
  const m = Math.min(bw.length, ew.length);
  let c = 0;

  while (c < m && bw[c] === ew[c]) {
    c++;
  }

  return bw.slice(0, c);
}

