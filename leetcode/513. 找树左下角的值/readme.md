## 思路

利用DFS(深度优先搜索)进行递归遍历二叉树。先定义一个最大深度(maxDepth)和结果值(res)，然后进行递归遍历，并在内部声明一个当前深度(curDepth)，每次操作 +1，当curDepth > maxDepth时，将 maxDepth 和 res 值进行更新。

## 代码 (JS)

```JavaScript
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
```

## 复杂度分析
n为树节点数，h为树高度
* 时间复杂度：O(n)
* 空间复杂度：O(h) 