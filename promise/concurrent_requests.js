//   请设计一种请求池，支持传入最大并发数，使得如下代码呈现如图的表现：
// function createRequest({ pool = 5 }) {
//   // TODO:
// }
// const request = createRequest({ pool: 3 });
// const url = 'https://www.typescriptlang.org/page-data/tools/page-data.json';
// Array(10).fill(1).forEach(() => request(url));

function axios(url) {
	return fetch(url, {
		cache: 'no-cache',
		mode: 'no-cors',
	});
	// return new Promise((resolve, reject) =>
	// 	setTimeout(() => {
	// 		fetch(url).then((data) => {
	// 			console.log('输出数据：', data);
	// 		});
	// 		resolve(url);
	// 	}, 3000)
	// );
}

function createRequest(pool = 5) {
	let arr = [];
	let timer = null;
	return function request(url) {
		timer && clearTimeout(timer);
		arr.push(url);

		function loop(_arr) {
			if (_arr.length === 0) return;
			let group = _arr.splice(0, pool);
			Promise.all(group.map((_url) => axios(_url))).then((data) => {
				console.log('输出数据：', data.json());
				loop(_arr);
			});
		}

		timer = setTimeout(function () {
			console.log('enter settimeout');
			loop(arr);
		}, 0);
	};
}
const url = 'https://www.typescriptlang.org/page-data/tools/page-data.json';
// const url = './ts.json';
let request = createRequest(3);
Array(10)
	.fill(1)
	.forEach(() => request(url));
