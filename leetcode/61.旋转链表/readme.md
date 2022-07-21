## 思路

根据题目可以总结出，将链表的每个节点向后移动 k 步，也就是将链表的倒数第 k 个节点作为头结点，其前面的所有节点放在原链表尾结点之后。
可以利用快慢指针来处理。

## 代码 (JS)

```JavaScript
var rotateRight = function(head, k) {
    if(k === 0 || head === null) return head;

    // 获取链表长度
    let len = calculateLen(head);
    k = k%len;

    // 定义快慢指针
    let slow = head;
    let fast = head;

    // 快指针向前移动 k 步
    for(let i=0; i<k; i++) {
        fast = fast.next
    }

    // 快指针移动到尾部为止
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 将快指针的下一个节点设为头结点
    fast.next = head;
    // 新的头节点为慢指针的下一个节点
    head = slow.next;
    slow.next = null;

    return head;
};

// 计算链表长度
function calculateLen(head) {
    let len = 0;
    while (head!==null) {
        head = head.next;
        len++;
    }
    return len;
}
```

## 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(1) 