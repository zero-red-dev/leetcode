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


function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) return list1 || list2;
  const s = new ListNode();
  let l1: ListNode | null = list1,
    l2: ListNode | null = list2,
    t = s;

  while (l1 && l2) {
    if (l1.val === l2.val) {
      t.next = new ListNode(l1.val);
      t = t.next;
      t.next = new ListNode(l2.val);
      t = t.next;
    } else if (l1.val < l2.val) {
      t.next = new ListNode(l1.val);
      t = t.next;
      while (l1.next && l1.next.val < l2.val) {
        l1 = l1.next;
        t.next = new ListNode(l1.val);
        t = t.next;
      }
      t.next = new ListNode(l2.val);
      t = t.next;
    } else {
      t.next = new ListNode(l2.val);
      t = t.next;
      while (l2.next && l2.next.val < l1.val) {
        l2 = l2.next;
        t.next = new ListNode(l2.val);
        t = t.next;
      }
      t.next = new ListNode(l1.val);
      t = t.next;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  t.next = l1 || l2;

  return s.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let r: ListNode | null = null;

  for (const n of lists) {
    r = mergeTwoLists(r, n);
  }

  return r;
}

