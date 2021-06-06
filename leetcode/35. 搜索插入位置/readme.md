## 思路

利用“二分法”。假设插入位置是 pos，那么可得出公式 nums[pos-1] < target <= nums[pos]
## 代码 (JS)

```JavaScript
/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums.length) return 0;

  let left = 0;
  let right = nums.length - 1;
  let pos = nums.length;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (target <= nums[mid]) {
      pos = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return pos;
};
```

## 复杂度分析
* 时间复杂度：O(logn)
* 空间复杂度：O(1) 