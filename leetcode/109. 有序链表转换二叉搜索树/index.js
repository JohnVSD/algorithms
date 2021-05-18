/**
 * todo 109. 有序链表转换二叉搜索树
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * ? 前置知识：<二叉搜索树：根节点的左子树一定比他小，右子树一定比他大> <链表中心点> <树的遍历>
 *
 * 单链表类
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 二叉树类
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function (head) {
	if (!head) return null;

	// 利用深度优先搜索遍历二叉树
	const dfs = (head, foot) => {
		if (head === foot) return null;

		// 利用快慢指针寻找链表中心点。
		let fast = head;
		let slow = head;
		while (fast !== foot && fast.next !== foot) {
			fast = fast.next.next; // 快指针走两步
			slow = slow.next; // 慢指针走一步
		}

		// slow.val 即是“有序单链表”的中心点
		let root = new TreeNode(slow.val);
		root.left = dfs(head, slow);
		root.right = dfs(slow.next, foot);

		return root;
	};

	return dfs(head, null);
};
