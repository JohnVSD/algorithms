## 题目
[160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)
* 找到两个单链表相交的起始节点。

## 思路
#### 思路一：利用哈希表

创建一个 哈希表（hashList） 遍历链表A将每一个节点进行存储，然后遍历链表B判断哈希表中如果存在则直接返回。
此方法比较好理解，但是用到了额外空间（hashList）

#### 思路二：利用双指针

创建两个指针 a、b 分别遍历 A、B 两个链表，当 a 指针走到 A 表尾部时就将 a 指针定向到 B表的头结点再次遍历B表。b指针同理先遍历B表再遍历A表。直到a、b指针相等的时候就是相交点。

举例：
* A表为：[A, B, C]；B表为：[E, C]
* A表走过的路径为：A+B+C+E+C
* B表走过的路径为：E+C+A+B+C

双指环方法很巧妙，在同样时间复杂度的情况下，空间复杂度控制在了O(1);
（路西大法好👍）

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