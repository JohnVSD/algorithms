## 思路

参考西法题解；利用哈希表 + 滑动窗口；

## 代码 (JS)

```JavaScript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	if (s === null || p === null || !s.length || !p.length) return [];

	const res = [];
	const pMap = new Map(); // 存储 p 中的字符
	for (let i = 0; i < p.length; i++) {
		pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
	}

	// 定义滑动窗口
	let left = 0,
		right = 0,
		count = 0;
	const window = new Map(); // 存储窗口中的字符

	while (right < s.length) {
		const sVal = s[right];
		right++;

		if (pMap.has(sVal)) {
			window.set(sVal, window.has(sVal) ? window.get(sVal) + 1 : 1);

			if (window.get(sVal) === pMap.get(sVal)) {
				count++;
			}
		}

		while (right - left >= p.length) {
			if (count === pMap.size) {
				res.push(left);
			}

			const lVal = s[left];
			left++;
			if (pMap.has(lVal)) {
				if (window.get(lVal) === pMap.get(lVal)) {
					count--;
				}
				window.set(lVal, window.get(lVal) - 1);
			}
		}
	}

	return res;
};
```

## 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(p) 