## 题目
[876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

## 思路

#### 思路

双指针之快慢指针，快指针走两步，慢指针走一步，当快指针走到尾节点时，慢指针正好走到中间节点。

## 代码 (JS)

```JavaScript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if(!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
```

## 复杂度分析

* 时间复杂度：O(n)
* 空间复杂度：O(1)