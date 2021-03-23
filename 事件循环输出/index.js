let a;
const b = new Promise((resolve, reject) => {
	console.log('promise1');
	resolve();
})
	.then(() => {
		console.log('promise2');
	})
	.then((res) => {
		console.log('promise3');
	})
	.then(() => {
		console.log('promise4');
	});

a = new Promise(async (resolve, reject) => {
	console.log(a);
	await b;
	console.log(a);
	console.log('after1');
	await a;
	resolve(true);
	console.log('after2');
});

// promise1、undefined、promise2、promise3、promise4、promise[pending]、after1、promise[pending]
