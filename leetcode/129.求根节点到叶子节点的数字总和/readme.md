## 题目
[129.求根节点到叶节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)

## 思路

#### 思路

* 如题可以得出需要把二叉树的每一个节点遍历到并且进行求和运算，可利用 DFS 方法依次遍历每一条路径上的节点进行计算，并传递计算结果。

## 代码 (JS)

```JavaScript
var sumNumbers = function (root) {
  let sum = 0; // 保存计算结果

  let dfs = (root, cur) => {
    if (!root) return;

    // 存储每一层的计算结果
    let curNum = cur * 10 + root.val;

    if (!root.left && !root.right) {
      // 遍历到叶子节点（左右节点都没有时）结束遍历，并将计算结果汇总。
      sum += curNum;
      return;
    }

    dfs(root.left, curNum);
    dfs(root.right, curNum);
  }

  return sum;
}
```

## 复杂度分析

n 为树节点数，h为树高度

* 时间复杂度：O(n)
* 空间复杂度：O(h)