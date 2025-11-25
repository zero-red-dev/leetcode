function threeSumClosest(nums: number[], target: number): number {
  const sn = nums.sort((a, b) => a - b);
  const len = sn.length;
  let r = 0;
  let clos = +Infinity;

  for (let i = 0; i < len; i++) {
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      const sum = sn[i] + sn[j] + sn[k];
      const c = Math.abs(sum - target);

      if (sum === target) {
        return sum;
      } else if (c < clos) {
        clos = c;
        r = sum;
      } else if (sum < target) j++;
      else k--;
    }
  }

  return r;
}
