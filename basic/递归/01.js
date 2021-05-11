/**
 * 递归：阶乘算法
 */
function factorial(x) {
	if (x === 1) {
		return 1;
	} else {
		console.log('x 等于：', x);
		return x * factorial(x - 1);
	}
}
console.log(factorial(3));
