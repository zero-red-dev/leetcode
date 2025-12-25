function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const totalWord = words.length;
  const strLength = s.length;

  if (totalWord === 0 || strLength === 0) return [];
  const wordLength = words[0].length;
  if (wordLength === 0) return [];

  const targetLength = wordLength * totalWord;

  if (strLength - targetLength < 0) return [];

  const map = new Map();
  for (const w of words) map.set(w, (map.get(w) || 0) + 1);

  let b = 0,
    e = targetLength;

  while (e <= strLength) {
    const subStr = s.slice(b, e);
    let s1 = 0,
      s2 = wordLength,
      count = 0;
    const smap = structuredClone(map);

    while (s2 <= targetLength) {
      const chunk = subStr.slice(s1, s2);

      let wordCount = smap.get(chunk);
      if (wordCount === undefined) break;
      wordCount--;
      if (wordCount < 0) break;

      smap.set(chunk, wordCount);
      count++;
      s1 = s2;

      if (count === totalWord) result.push(b);

      s2 += wordLength;
    }

    e++;
    b++;
  }

  return result;
}

