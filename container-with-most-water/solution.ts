function maxArea(height: number[]): number {
  let ma = 0;
  let b = 0, e = height.length - 1;

  while (b < e) {
    const hb = height[b], he = height[e];
    const h = Math.min(hb, he);
    const w = e - b;

    ma = Math.max(ma, h * w);

    if (hb < he) b++;
    else e--;
  }

  return ma;
}

