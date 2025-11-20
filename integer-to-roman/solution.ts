function intToRoman(num: number): string {
  let v = "";
  const r1000 = ["", "M", "MM", "MMM"];
  const r100 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const r10 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const r1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const d = String(num).split("");
  const l = d.length - 1;
  d.forEach((c, i) => {
    const p = 10 ** (l - i);
    switch (p) {
      case 1000:
        v += r1000[+c];
        break;
      case 100:
        v += r100[+c];
        break;
      case 10:
        v += r10[+c];
        break;
      case 1:
        v += r1[+c];
        break;
    }
  });

  return v;
}
