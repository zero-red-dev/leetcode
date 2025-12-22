function searchInsert(nums: number[], target: number): number {
  let len = nums.length;
  let r = 0,
    b = 0,
    e = len - 1;

  while (b <= e) {
    let m = Math.floor((b + e) / 2);
    if (nums[m] === target) return m;
    else if (nums[m] > target) r = e = m - 1;
    else r = b = m + 1;
  }

  if (r < 0) return 0;
  if (r > len - 1) return len;

  return target - nums[r] > 0 ? r + 1 : r;
}

