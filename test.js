const originData = {
	currentValue: [
		{ 设备: 'ALL', 当日值: '27,753,119' },
		{ 设备: 'androidPad', 当日值: '1,272,597' },
		{ 设备: 'iphone', 当日值: '2,861,896' },
		{ 设备: 'ipad', 当日值: '760,552' },
		{ 设备: 'android', 当日值: '22,858,074' },
	],
	previousValue: [
		{ 设备: 'ALL', 昨日值: '27,885,733' },
		{ 设备: 'android', 昨日值: '22,962,011' },
		{ 设备: 'androidPad', 昨日值: '1,283,772' },
		{ 设备: 'ipad', 昨日值: '764,110' },
		{ 设备: 'iphone', 昨日值: '2,875,840' },
	],
	previousChange: [
		{ 设备: 'ALL', 变化率: '-0.48' },
		{ 设备: 'androidPad', 变化率: '-0.87' },
		{ 设备: 'iphone', 变化率: '-0.48' },
		{ 设备: 'ipad', 变化率: '-0.47' },
		{ 设备: 'android', 变化率: '-0.45' },
	],
};

// [
//   { '设备': 'ALL', '当日值': '27,753,119','昨日值': '27,885,733','变化率': '-0.48'},
//   { '设备': 'androidPad', '当日值': '1,272,597','昨日值': '1,283,772','变化率': '-0.87'}
// ]
// const resultMap = new Map();

// for (const values of Object.values(originData)) {
// 	console.log('内容：', values);
//   values.forEach(item => {
//     const key = '设备';

//     const { 设备, ...rest } = item;
//     if (resultMap.has(key)) {

// 		}
//   });
// }

function changeData(data, name) {
	let temp = {};
	// console.log(data);
	data.map((v) => {
		console.log(v);
		temp[v['设备']] = v[name];
	});

	console.log(temp);
	return temp;
}

function get(data) {
	let cur = data['currentValue'];
	let prev = data['previousValue'];
	let prec = data['previousChange'];
	cur = changeData(cur, '当日值');
	prev = changeData(prev, '昨日值');
	prec = changeData(prec, '变化率');
	let res = [];
	for (let key in cur) {
		let temp = {};
		temp['设备'] = key;
		temp['当日值'] = cur[key];
		temp['昨日值'] = prev[key];
		temp['变化率'] = prec[key];
		res.push(temp);
	}
	return res;
}

console.log(get(originData));
