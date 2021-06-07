/**
 * 69. x 的平方根
 * https://leetcode-cn.com/problems/sqrtx/
 */

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
