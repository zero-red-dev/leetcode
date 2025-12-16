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

function reverseNodeByK(head: ListNode | null, k: number): ListNode | null {
  let pre: ListNode | null = null;
  let cur = head;
  let next: ListNode | null = null;

  while (cur !== null && k > 0) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    k--;
  }

  return pre;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k === 1) return head;
  const r = new ListNode(0);
  r.next = head;
  let cur = head,
    pre = r;

  while (cur !== null) {
    let i = 0;
    let t = cur;

    while (cur !== null && k > i) {
      cur = cur.next;
      i++;
    }

    if (i === k) {
      pre.next = reverseNodeByK(t, k);
      pre = t;
    } else {
      pre.next = t;
    }
  }

  return r.next;
}

