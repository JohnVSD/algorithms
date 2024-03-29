## 题目
> [27.移除元素](https://leetcode.cn/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150)
此题与 [26.删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150) 有些像，解题思路相同。

给你一个数组 ```nums``` 和一个值 ```val```，你需要 原地 移除所有数值等于 ```val``` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 ```O(1)``` 额外空间并原地修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**示例 1：**

> 输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

**示例 2：**

> 输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。

## 思路
**双指针**

由于题目要求是移除值等于 val 的元素，所以最终结果数组一定比原数组的长度要短，可以直接在原数组进行操作，利用快慢指针即可。left 为左指针，right 为右指针，起始位置在索引 0。

* 判断 right 的值，如果不等于 val，就将 left 的值替换为 right 的值，并将 left 向前移动一步。
* 如果 right 等于 val，left 不动，right 继续向前移动。

最终 left 移动的步长就是新的长度值。

## 代码

```js
function removeElement(nums, val) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === val) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
}
```

## 复杂度分析
* 时间复杂度：O(n)， n 为 nums 长度，最坏情况需要全部遍历完毕。 
* 空间复杂度：O(1)，没有创建新的空间。