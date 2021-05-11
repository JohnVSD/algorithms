/**
 * 给定一个 8*8 的棋盘，上面有若干个车 1，写一个函数检查这些车有没有互相攻击的情况。
 * 输入参数是一个 0 和 1 组成的二维数组。
 */
const arr = [
	[0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
];

function rock(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].reduce((p, c) => (p += c > 1))) return false;
		if (
			arr.reduce((p, c) => {
				return (p += c[i]);
			}, 0) > 1
		) {
			return false;
		}
	}
	return true;
}

console.log(rock(arr));
