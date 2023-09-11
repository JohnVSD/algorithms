## 题目
* [88.合并两个有序数组
](https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150)

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

示例 1：

> 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

示例 2：

>输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。

## 方法一 合并后排序
直接合并两个数组，然后排序。

## 代码

```js
function merge(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a , b) => a - b);
}
```
## 复杂度分析
时间复杂度：O((m+n) log (m+n)) 因为 sort 方法的复杂度为 O(n log n)，直接套用即可
空间复杂度：O(log(m+n))。排序序列的长度为 m+n，套用快速排序的空间复杂度即可 O(log n) 

## 方法二 双指针
利用两个数组已经被排序的特性，将两个数组看成两个队列，每次对比列头元素，将较小的值存入结果数组。
<image src="../img/88.gif"/>

具体步骤：创建一个新数组。声明两个索引 p1、p2，起始位置都是0，分别指向 nums1 和 nums2。开始遍历，当 p1 的值小于 p2 时，将 p1 的值插入新数组，并且 p1 向前移动一步，当 p1 的值大于 p2 时，将 p2 的值插入新数组，并且 p2 向前移动一步。做好边界判断：当 p1 等于 m 时，将 p2 的值插入新数组，并且 p2 向前移动一步， 当 p2 等于 n 时，将 p1 的值插入新数组，并且 p1 向前移动一步。

## 代码

```js
function merge(nums1, m, nums2, n) {
  const sorted = [];
  let p1 = 0;
  let p2 = 0;

  while(p1 < m || p2 < n) {
    const val1 = nums1[p1];
    const val2 = nums2[p2];

    if (p1 === m) {
      sorted.push(val2);
      p2++;
    } else if (p2 === n) {
      sorted.push(val1);
      p1++
    } else if (val1 < val2) {
      sorted.push(val1);
      p1++;
    } else {
      sorted.push(val2);
      p2++;
    }
  }

  sorted.forEach((val, i) => {
    nums1[i] = val;
  })
}
```

## 复杂度分析
* 时间复杂度：O(m + n)
* 空间复杂度：O(m + n) 新建了一个结果数组