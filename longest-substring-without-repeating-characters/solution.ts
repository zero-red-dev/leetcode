function lengthOfLongestSubstring(s: string): number {
  const cs = s.split("");
  let cm: Map<string, number> = new Map();
  let b = 0, max = 0;
  // const subStr: string[] = []

  cs.forEach((c, e) => {
    if (cm.has(c) && cm.get(c)! >= b)
      b = cm.get(c)! + 1;

    cm.set(c, e);

    max = Math.max(max, (e - b + 1));
    // subStr.push(s.slice(b, e + 1))
  })

  return max;
}
