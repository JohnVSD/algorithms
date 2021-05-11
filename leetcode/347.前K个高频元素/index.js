// 347. 前 K 个高频元素
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// https://leetcode-cn.com/problems/top-k-frequent-elements/
// 示例:
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const hasMap = new Map();
	nums.forEach((item) => {
		// 存储元素出现次数：“元素 => 次数”
		if (hasMap.has(item)) {
			let count = hasMap.get(item);
			hasMap.set(item, count + 1);
		} else {
			hasMap.set(item, 1);
		}
	});

	const keys = [];
	for (let key of hasMap.keys()) {
		keys.push(key);
	}

	// sort 核心算法为快速排序：O(nlogn)
	keys.sort((a, b) => {
		return hasMap.get(b) - hasMap.get(a);
	});

	return keys.slice(0, k);
};
// topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
