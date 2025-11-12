function longestPalindrome(s: string): string {
  const cs = s.split("");
  let p = "";
  // const subStr: string[] = [];

  cs.forEach((c, i) => {
    let b = i, e = i + 1;

    while (b >= 0 && e <= cs.length && s.slice(b, e) === s.slice(b, e).split("").reverse().join("")) {
      let t = s.slice(b, e);
      let r = i + 1;

      while (b === i && c === cs[r]) {
        t = s.slice(b, r + 1);
        r++;
      }

      if (b === i && b + 1 < r) {
        e = r;
        r = 0;
      }

      // subStr.push(t);

      if (t.length > p.length) p = t;
      b--;
      e++;
    }
  });

  return p;
}

