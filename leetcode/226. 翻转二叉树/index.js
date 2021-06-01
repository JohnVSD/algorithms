/**
 * todo 226. 翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * 利用深度优先遍历 DFS
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root) return null;

	let left = invertTree(root.left);
	let right = invertTree(root.right);
	root.left = right;
	root.right = left;

	return root;
};
