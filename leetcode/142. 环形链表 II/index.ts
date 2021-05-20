/**
 * 142. 环形链表 II
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */
import { ListNode } from '../class';

// todo 双指针之快慢指针实现
function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;

  let fast = head;
  let slow = head;

  do {
    fast = fast && fast.next ? fast.next.next : null;
    slow = slow.next;
  } while (fast !== slow)

  if (fast === null) return null;

  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
}