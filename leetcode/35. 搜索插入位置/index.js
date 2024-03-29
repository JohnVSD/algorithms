// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// * 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2
// * 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路：插入位置为pos，可得出成立条件：nums[pos - 1] < target <= nums[pos]
const searchInsert = function (nums, target) {
	if (!nums.length) return 0;

	let left = 0;
	let right = nums.length - 1;
	let pos = nums.length;

	while (left <= right) {
		let mid = parseInt((left + right) / 2); // 向下取整

		if (target <= nums[mid]) {
			pos = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return pos;
};

let nums = [1, 2, 3, 5, 6, 8];
console.log(searchInsert(nums, 9));
