/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const r = new ListNode(0);
  r.next = head;
  let cur = r;

  while (cur.next && cur.next.next) {
    let f = cur.next;
    let s = cur.next.next;
    f.next = s.next;

    cur.next = s;
    cur.next.next = f;

    cur = cur.next.next;
  }

  return r.next;
}

