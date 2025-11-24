function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  let r: number[][] = [];
  const sn = nums.sort((a, b) => a - b);

  for (let i = 0; i < sn.length && sn[i] <= 0; i++) {
    if (sn[i] === sn[i - 1]) continue;

    let j = i + 1;
    let k = sn.length - 1;

    while (j < k) {
      const n = sn[i] + sn[k] + sn[j];
      if (n === 0) {
        r.push([sn[i], sn[j], sn[k]]);
        j++;
        k--;

        while (sn[j] === sn[j - 1]) j++;
        while (sn[k] === sn[k + 1]) k--;
      } else if (n < 0) j++;
      else k--;
    }
  }

  return r;
}

