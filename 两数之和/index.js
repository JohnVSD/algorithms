// 条件：使用哈希map解答
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// * 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回[0, 1]

// 时间复杂度 O(N)，空间复杂度 O(N)
const toSum = function (nums, target) {
	let hasMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = target - nums[i];
		if (hasMap.has(num)) {
			return [hasMap.get(num), i];
		}
		hasMap.set(nums[i], i);
	}

	return [];
};

console.log('结果：', toSum([2, 7, 11, 15], 9));
