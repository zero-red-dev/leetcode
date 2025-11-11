function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const a = [...nums1, ...nums2].sort((a, b) => a - b);
  const m = a.length / 2;

  return Number.isInteger(m) ? (a[m] + a[m - 1]) / 2 : a[Math.floor(m)];
}

