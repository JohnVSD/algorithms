/**
 * 438. 找到字符串中所有字母异位词
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */

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

const s = 'cbaebabacd';
const p = 'abc';

console.log(findAnagrams(s, p));
