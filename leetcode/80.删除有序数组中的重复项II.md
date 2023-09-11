## 题目
[80.删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150)

## 思路
**双指针**
此题思路和 [26.删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150) 思路相同。

因为题目前提是有序的数组，所以相同的元素必然是连续的。我们采用快慢指针思路解决，遍历数组的每一个元素是否应该保留，慢指针表示应该保留的长度，快指针表示检查过得长度。具体的声明两个变量，slow 表示慢指针，fast 表示快指针，快慢指针初始位置相同。

由于题目是保留两个重复元素，所以应该判断当前元素 nums[fast] 是否与上上个元素 nums[slow - 2] 相等。而且当 nums[fast] = nums[slow - 2] 时，当前元素 nums[fast] 不应该被保留，因为一定会存在这个关系（nums[slow-2] = nums[slow - 1] = nums[fast]）。最后，slow 即为处理好的数组长度。

必然因素，由题意可知数组前两个元素必然是要保留的，所以长度小于等于 2 的数组不需要处理。长度大于 2 的数组，将快慢指针的初始位置设置为 2 即可。

## 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  if (len <= 2) return len;

  let slow = 2;
  let fast = 2;
  while(fast < len) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
}
```

## 复杂度分析
* 时间复杂度：O(n)， n 为 nums 长度，最坏情况需要全部遍历完毕。 
* 空间复杂度：O(1)，没有创建新的空间。