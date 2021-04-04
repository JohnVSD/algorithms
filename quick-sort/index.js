/**
 * 快速排序
 * * 关键因素：
 * 基线条件：数组长度为 1 或空时返回当前数组；
 * 基准值 a，小于 a 的放左边数组，大于的放右边，进行拆分并以此调用递归函数，直到满足基线条件。
 * 时间复杂度：O(nlogn)
 */

function quickSort(arr) {
	// 定义基线条件
	if (arr.length < 2) return arr;

	// 定义基准值
	let num = arr[0];
	let leftArr = [];
	let rightArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (num < arr[i]) {
			rightArr.push(arr[i]);
		}
		if (num > arr[i]) {
			leftArr.push(arr[i]);
		}
	}

	return [...quickSort(leftArr), num, ...quickSort(rightArr)];
}

const list = [2, 4, 7, 1, 3, 5, 8, 9];
console.log(quickSort(list));
