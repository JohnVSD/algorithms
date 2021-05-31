/**
 * todo 3. 无重复字符的最长子串
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

/**
 * todo 1 暴力法
 * 时间复杂度：O(n * n)
 * 空间复杂度：O(n)
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
// 	let res = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		let map = {};
// 		for (let j = i; j < s.length; j++) {
// 			if (map[s[j]] !== undefined) {
// 				break;
// 			}
// 			map[s[j]] = true;
// 			res = Math.max(res, j - i + 1);
// 		}
// 	}

// 	return res;
// };

/**
 * todo 2 滑动窗口（双指针）+ 哈希表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var lengthOfLongestSubstring = function (s) {
	let map = new Set();
	let res = 0;
	let slow = 0;

	for (let fast = 0; fast < s.length; fast++) {
		while (map.has(s[fast]) && slow < s.length) {
			map.delete(s[slow]);
			slow++;
		}

		res = Math.max(res, fast - slow + 1);
		map.add(s[fast]);
	}

	return res;
};

let s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
