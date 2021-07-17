/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function reverseList(head) {
  let prev = null;
  while (head) {
    const cur = head;
    head = head.next;
    cur.next = prev;
    prev = cur;
  }
  return prev;
}
