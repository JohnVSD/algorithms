// 二叉树类
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

// 自测用例
let left = new TreeNode(2);
let right_l = new TreeNode(4);
let right_r = new TreeNode(5);
let right = new TreeNode(3, right_l, right_r);
let root = new TreeNode(1, left, right);

var serialize = function (root) {
	let queue = [root];
	let res = [];

	while (queue.length) {
		let node = queue.shift();
		if (node) {
			res.push(node.val);
			queue.push(node.left);
			queue.push(node.right);
		} else {
			res.push('null');
		}
	}
	return res.join(',');
};
console.log('序列化-->：', serialize(root));
