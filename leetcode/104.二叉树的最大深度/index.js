/**
 * todo 109. 二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function (root) {
	if (!root) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
