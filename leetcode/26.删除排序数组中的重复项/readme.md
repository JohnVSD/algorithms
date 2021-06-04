## 思路

利用双指针
* A指针初始索引为0，B指针为1；
* 遇到重复元素B指针就继续前移；
* 遇到不同的元素A指针就向前移动一步，将B指针的元素写入A的位置；

## 代码 (JS)

```JavaScript
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  
  let A = 0;
  for (let B = 1; B < nums.length; B++) {
    if (nums[A] !== nums[B]) {
      A++;
      nums[A] = nums[B];
    }
  }

  return A + 1;
};
```

## 复杂度分析

* 时间复杂度：O(n)
* 空间复杂度：O(1)