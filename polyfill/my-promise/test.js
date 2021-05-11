const MyPromise = require('./my-promise');

const p = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		console.log('调用then');
		resolve('success');
	}, 3000);

	// reject('error');
});

p.then((res) => {
	console.log(1);
	console.log('resolve：', res);
});

p.then((res) => {
	console.log(2);
	console.log('resolve：', res);
});

p.then((res) => {
	console.log(3);
	console.log('resolve：', res);
});
