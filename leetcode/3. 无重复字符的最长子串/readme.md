## 思路

参考官方题解：利用滑动窗口，声明快慢两个指针，和一个哈希列表，遍历字符串
快指针不断右移，并保存每个值，判断哈希表中是否包含当前值如果包含并且慢指针没有超出长度，就删除慢指针位置的值
然后慢指针开始右移。取快慢指针的最长距离就是最长子串的长度。

## 代码 (JS)

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Set();
    let res = 0;
    let slow = 0;
    
    for (let fast = 0; fast < s.length; fast++) {
        let val = s[fast];

        while (map.has(val) && slow < s.length) {
            map.delete(s[slow]);
            slow ++;
        }
        res = Math.max(res, fast - slow + 1);
        map.add(val);
    }

    return res;
};
```

## 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(n) 