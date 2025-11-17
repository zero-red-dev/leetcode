function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const s = String(x);
    if (s === s.split("").reverse().join("")) return true;

    return false;
}
