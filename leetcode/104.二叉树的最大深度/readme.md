## 思路

利用 DFS 方法，分别遍历 left 节点和 right 节点，每一层进行 +1，取最大值。

## 代码 (JS)

```JavaScript
var maxDepth = function (root) {
	if (!root) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

## 复杂度分析
n为树节点数，h为树高度
* 时间复杂度：O(n)
* 空间复杂度：O(h) 