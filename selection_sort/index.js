/**
 * 选择排序
 * 一种灵巧的算法，但是速度并不快
 * 时间复杂度：O(n²)
 */

//  先找出最小的值
function findSmallest(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;
	let len = arr.length;

	console.log(arr);
	for (let i = 0; i < len; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}

	return smallestIndex;
}

// 利用上方函数进行选择排序
function selectionSort(arr) {
	let newArr = [];
	let len = arr.length;

	for (let i = 0; i < len; i++) {
		let smallestIndex = findSmallest(arr);
		newArr.push(arr.splice(smallestIndex, 1)[0]);
	}

	return newArr;
}

let list = [8, 2, 9, 3, 7, 4, 1];

console.log('排序结果：', selectionSort(list));
