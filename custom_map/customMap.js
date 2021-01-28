/**
 * 多种方式实现 Array.map() 方法
 * 首先分析 map 用法
 * map 方法创建一个新数组，其结果是该数组中的每个元素是调用一次传入函数的返回值。
 * Array.map(function(item, index, Array))
 */

// todo 方法1 for(...) 循环
function cMap(arr, callback) {
	const arry = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		arry[i] = callback(item, i, arr);
	}
	return arry;
}

const arry = [2, 3, 4, 5];
const newArr = cMap(arry, (item, index, arr) => {
	console.log('内容：', item, index, arr);
	return item + 1;
});
console.log(newArr);

// todo 方法2 while 循环
// ...

// todo 方法3 利用 reduce 实现 map
// ...
