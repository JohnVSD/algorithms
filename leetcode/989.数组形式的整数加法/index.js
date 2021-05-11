/**
 * JS大数相加会有精度问题，所以不能用js本身的加运算
 * 从低位向高位依次计算。例如：123+912，计算过程是 3+2，2+1，1+9 可以得出结果为 1035；可以转换为如下代码：
 * 地址：https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	var addToArrayForm = function (num, k) {
		let res = [];
		let n = num.length;

		for (let i = n - 1; i >= 0; i--) {
			// 利用取余操作，取出k值最后一位进行加运算
			let sum = num[i] + (k % 10);
			// 利用向下取整的方式，去掉k最后一位数，依次计算
			k = Math.floor(k / 10);

			if (sum >= 10) {
				k++;
				sum -= 10;
			}

			res.push(sum);
		}

		for (; k > 0; k = Math.floor(k / 10)) {
			res.push(k % 10);
		}

		res.revers();

		return res;
	};
};
