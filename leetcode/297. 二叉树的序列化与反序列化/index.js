// todo 297. 二叉树的序列化与反序列化
// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	let nodeList = [root];
	let res = [];

	while (nodeList.length) {
		let node = nodeList.shift();
		if (node) {
			res.push(node.val);
			nodeList.push(node.left);
			nodeList.push(node.right);
		} else {
			res.push('#');
		}
	}

	return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	if (data === '#') return null;

	let list = data.split(',');
	let root = new TreeNode(list[0]);
	let queue = [root];
	let cursor = 1;

	while (cursor < list.length) {
		let node = queue.shift();
		node.title = '引用关系';

		let leftVal = list[cursor];
		let rightVal = list[cursor + 1];

		if (leftVal !== '#') {
			let leftNode = new TreeNode(leftVal);
			node.left = leftNode;
			queue.push(leftNode);
		}
		if (rightVal !== '#') {
			let rightNode = new TreeNode(rightVal);
			node.right = rightNode;
			queue.push(rightNode);
		}

		cursor += 2;
	}

	return root;
};

let root = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null,
	},
	right: {
		val: 3,
		left: {
			val: 4,
			left: null,
			right: null,
		},
		right: {
			val: 5,
			left: null,
			right: null,
		},
	},
};
let treeStr = serialize(root);
let getRoot = deserialize(treeStr);
console.log('序列化结果：', treeStr);
console.log('反序列化结果：', getRoot);
