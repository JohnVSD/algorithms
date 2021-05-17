/**
 * todo 24. 两两交换链表中的节点
 * * 题解：https://algo91.herokuapp.com/solutionDetail?type=3&id=8&max_id=2
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
var swapPairs = function (head) {
	if (!head || !head.next) return head;

	let res = head.next; // 返回结果
	let preNode = new ListNode(); // 前置指针
	preNode.next = head;
	let now = head; // 第一个节点

	while (now && now.next) {
		let nextNode = now.next; // 保存第二个节点
		let nnNode = nextNode.next; // 保存后置指针

		// 对链表进行逆转
		now.next = nnNode;
		nextNode.next = now;
		preNode.next = nextNode;

		// 修改指针，进行下一轮逆转
		preNode = now;
		now = nnNode;
	}

	return res;
};
