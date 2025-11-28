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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const arr: ListNode[] = [];
  let node: ListNode | null = head;

  while (node !== null) {
    arr.push(node);
    node = node.next;
  }

  const sz = arr.length;
  const ni = sz - n;
  if (sz === 1) return null;
  else if (n === 1) {
    arr[sz - 2].next = null;
    arr.length = 0; // free array memory
    return head;
  } else if (ni === 0 && sz > 1) {
    const node = arr[ni + 1];
    arr.length = 0; // free array memory
    return node;
  } else {
    const bn = arr[ni - 1];
    const en = arr[ni + 1];
    bn.next = en;

    arr.length = 0; // free array memory

    return head;
  }
}

