## 题目
[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：
```
输入：nums = [2, 7, 11, 15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

示例 2：
```
输入：nums = [3, 2, 4], target = 6
输出：[1,2]
```

## 思路

#### 思路：哈希表

创建一个哈希表(为了将数组中的每一个值和索引存储)，用目标值 target 减去 nums 每一个元素，判断哈希表中是否存在，存在则直接返回该索引。

## 代码 (TS)

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums.length) return [];

  let hashList = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (hashList.has(num)) {
      return [hashList.get(num), i]
    }
    hashList.set(nums[i], i);
  }

  return [];
};
```

## 复杂度分析

* 时间复杂度：O(n) nums长度
* 空间复杂度：O(n) 哈希表长度