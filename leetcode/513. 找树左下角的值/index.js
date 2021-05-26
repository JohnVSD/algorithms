/**
 * todo 513. 找树左下角的值
 * * 给定一个二叉树，在树的最后一行找到最左边的值。
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
	let maxDepth = 0;
	let res = root.val;

	let dfs = (curNode, depth) => {
		if (!curNode) return;

		let curDepth = depth + 1;

		if (maxDepth < curLevel) {
			maxDepth = curDepth;
			res = curNode.val;
		}

		dfs(curNode.left, curDepth);
		dfs(curNode.right, curDepth);
	};

	dfs(root.left, 0);
	dfs(root.right, 0);

	return res;
};
