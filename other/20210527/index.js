/**
 * todo 实现 mergePromise 函数，把传进去的数组顺序先后执行，并且把返回的数据先后放到数组 data 中
 */

const timeout = (ms) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});

const ajax1 = () =>
	timeout(2000).then(() => {
		console.log('1');
		return 1;
	});

const ajax2 = () =>
	timeout(1000).then(() => {
		console.log('2');
		return 2;
	});

const ajax3 = () =>
	timeout(2000).then(() => {
		console.log('3');
		return 3;
	});

const mergePromise = async (ajaxArray) => {
	/**
	 * !在这里实现你的代码
	 * * 以下为我的代码实现，利用 async、await 和 for ... of 配合
	 */
	let data = [];
	for (const ajax of ajaxArray) {
		const res = await ajax();
		data.push(res);
	}
	return data;
};

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
	console.log('done');
	console.log(data); // data 为 [1, 2, 3]
});

// 分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
