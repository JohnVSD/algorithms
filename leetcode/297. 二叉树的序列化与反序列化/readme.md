## 思路

BFS 层序遍历。参考[西法题解](https://algo91.herokuapp.com/solutionDetail?type=3&id=17&max_id=2)。

## 代码 (JS)

```JavaScript
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
```

## 复杂度分析
* 时间复杂度：O(n) 每个节点遍历了一次
* 空间复杂度：O(n) 利用到额外空间存储树节点