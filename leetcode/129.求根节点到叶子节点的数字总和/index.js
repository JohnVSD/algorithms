// 二叉树类
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

// 自测用例
let left = new TreeNode(5);
let right = new TreeNode(3);
let root = new TreeNode(1, left, right);

/**
 * todo 129.求根节点到叶节点数字之和
 * * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
	let sum = 0;

	let dfs = (root, cur) => {
		if (!root) return;

		// 当前路径上的值计算
		let curNum = cur * 10 + root.val;
		if (!root.left && !root.right) {
			sum += curNum;
			return;
		}

		dfs(root.left, curNum);
		dfs(root.right, curNum);
	};
	dfs(root, 0);

	return sum;
};

console.log('求和：', sumNumbers(root));
