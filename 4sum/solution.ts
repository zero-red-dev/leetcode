function fourSum(nums: number[], target: number): number[][] {
  const sn = nums.sort((a, b) => a - b);
  const len = sn.length;
  const r: number[][] = [];

  for (let a = 0; a < len; a++) {
    if (a > 0 && sn[a] === sn[a - 1]) continue;
    for (let b = a + 1; b < len; b++) {
      if (b > a + 1 && sn[b] === sn[b - 1]) continue;

      let c = b + 1;
      let d = len - 1;
      while (c < d) {
        const x = sn[a] + sn[b] + sn[c] + sn[d];
        if (x === target) {
          r.push([sn[a], sn[b], sn[c], sn[d]]);
          c++;
          d--;
          while (c < d && sn[c] === sn[c - 1]) c++;
          while (c < d && sn[d] === sn[d + 1]) d--;
        } else if (x < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  return r;
}

