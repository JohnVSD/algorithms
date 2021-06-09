## 题目
[278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

## 思路

通过题目可以看出版本号是一个有序数组，而且要求尽量少的调用 isBadVersion()，可以想到用二分法来解决。

## 代码 (JS)

```JavaScript
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let l = 0;
    let r = n;
    let res = 0;

    while ( l<=r ) {
      let mid = parseInt((l + r) / 2);
      
      if(isBadVersion(mid)){
        r = mid - 1;
      } else {
        res = mid + 1;
        l = mid + 1;
      }
    }

    return res;
  }
}
```

## 复杂度分析

* 时间复杂度：O(logn)
* 空间复杂度：O(1)