## 思路

已知信息：有序链表；二叉搜索树(二叉搜索树的任意一个节点，当前节点的值必然大于所有左子树的节点，同理当前节点必然小于所有右子树节点)

根据得到的信息可以想到：

* 将链表中心位置作为二叉树搜索树的根节点，然后利用 “深度优先遍历(dfs)” 依次创建左子树和右子树。
* 可以使用快慢指针获取链表中心点，快指针走两步，慢指针走一步，当快指针走到链表结尾时，慢指针正好在链表中心位置。

## 代码 (JS)

```JavaScript
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
```

## 复杂度分析
n为链表长度
* 时间复杂度：递归深度为 logn，每一层的基本操作数为n，所以总体复杂度为 O(nlogn)
* 空间复杂度：O(logn) 