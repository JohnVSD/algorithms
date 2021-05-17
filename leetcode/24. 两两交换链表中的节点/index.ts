/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let res = head;
  let preNode = new ListNode(); // 创建前置节点
  preNode.next = head;
  let now = head; // 创建第一个节点

  while (now && now.next) {
    let nextNode = now.next; // 保存第二个节点
    let nnNode = nextNode.next; // 保存后置节点

    // 进行链表逆转
    now.next = nextNode;
    nextNode.next = now;
    preNode.next = nextNode;

    // 修改指针，进行下一轮逆转
    preNode = now;
    now = nnNode;
  }

  return res;
};