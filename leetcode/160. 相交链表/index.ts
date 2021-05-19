/**
 * 160. 相交链表
 */
import { ListNode } from '../class';

/**
 * todo 方法 1：利用哈希表
 * * 时间复杂度：O(m+n)
 * * 空间复杂度：O(n)
 */ 
function getIntersectionNodeA(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let hashNode = new Set();

  while (headA != null) {
    hashNode.add(headA);
    headA = headA.next;
  }

  while (headB != null) {
    if (hashNode.has(headB)) return headB;
    headB = headB.next;
  }
  
  return null;
}

/**
 * todo 方法 2：利用双指针
 * * 时间复杂度：O(n)
 * * 空间复杂度：O(1)
 */
function getIntersectionNodeB(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return a;
}