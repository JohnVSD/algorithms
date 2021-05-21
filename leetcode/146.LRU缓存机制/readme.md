## 题目
[146. LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

## 思路



## 代码 (TS)

```TypeScript
/**
 * todo 方法 1：利用哈希表
 * * 时间复杂度：O(m+n)
 * * 空间复杂度：O(n)
 */ 
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
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
```

## 复杂度分析

假设：m 为 headA 长度，n 为 headB 长度

* 时间复杂度：
  * 哈希表法：O(m + n) => O(n)
  * 双指针法：O(n)
* 空间复杂度：
  * 哈希表法：O(n) n为哈希list
  * 双指针法：O(1) 没有使用额外的空间