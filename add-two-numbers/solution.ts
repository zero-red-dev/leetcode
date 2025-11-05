class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) return null;

  let n1 = "";
  let n2 = "";
  let cl1: ListNode | null = l1;
  let cl2: ListNode | null = l2;

  while (cl1) {
    n1 += cl1.val;
    cl1 = cl1.next;
  }

  while (cl2) {
    n2 += cl2.val;
    cl2 = cl2.next;
  }

  n1 = n1.split("").reverse().join("");
  n2 = n2.split("").reverse().join("");

  let sum = String(BigInt(n1) + BigInt(n2));

  let s: ListNode | null = null;
  let ps: ListNode | null = null;

  sum.split("")
    .reverse()
    .forEach((c, i) => {
      if (i === 0) {
        s = new ListNode(+c, null);
        ps = s;
      } else {
        let cs = new ListNode(+c, null);
        ps!!.next = cs;
        ps = cs;
      }
    });

  return s;
}
