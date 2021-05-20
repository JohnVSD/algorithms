## 题目
[142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
* 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

## 思路

#### 思路：双指针之快慢指针

创建快慢指针，快指针走两步，慢指针走一步，两者相遇第一次时可能不是在环的入口，此时将快指针重新定位至head节点，然后快慢指针每次各走一步，两者再次相遇时就是环的入口。

## 代码 (TS)

```TypeScript
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
```

## 复杂度分析

n 为 链表 长度

* 时间复杂度：O(n)
* 空间复杂度：O(1)