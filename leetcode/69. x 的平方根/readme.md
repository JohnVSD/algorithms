## 题目
[69. x的平方根](https://leetcode-cn.com/problems/sqrtx/)

## 思路

可以换个思路将此题变为有序数组: [0, 1, 2, 3..., x] 然后利用二分法进行遍历，再根据题目要求“不需要考虑小数部分”，那么可以得出公式，mid * mid <= x 取小于x的最右侧值即可。代码如下

## 代码 (JS)

```JavaScript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) return 1;
    
  let l = 0;
  let r = x;
  let res = 0;

  while (l <= r) {
    let mid = parseInt((l + r) / 2);
    if (mid * mid <= x) {
      res = mid;
      l = mid + 1;
    } else if (mid * mid > x) {
      r = mid - 1;
    }
  }

  return res;
};
```

## 复杂度分析
* 时间复杂度：O(logn)
* 空间复杂度：O(n) 