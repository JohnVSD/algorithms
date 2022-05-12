// 入参（有权限访问的）
var value = ['初中$_$初一$_$语文', '初中$_$初二$_$语文', '初中$_$初二$_$英语'];
// var value = ['高中$_$高一$_$语文'];
// var value = ['高中$_$高一$_$语文1'];

// 全量数据
var treeData = [
	{
		label: '初中',
		value: '初中',
		children: [
			{
				label: '初一',
				value: '初一',
				children: [
					{
						label: '语文',
						value: '语文',
						children: [],
					},
					{
						label: '数学',
						value: '数学',
						children: [],
					},
				],
			},
			{
				label: '初二',
				value: '初二',
				children: [
					{
						label: '语文',
						value: '语文',
						children: [],
					},
					{
						label: '数学',
						value: '数学',
						children: [],
					},
				],
			},
		],
	},
	{
		label: '高中',
		value: '高中',
		children: [
			{
				label: '高一',
				value: '高一',
				children: [
					{
						label: '语文',
						value: '语文',
						children: [],
					},
					{
						label: '数学',
						value: '数学',
						children: [],
					},
				],
			},
		],
	},
];

function TreeNode(val) {
	this.val = val || null;
	this.children = {};
}
var multiSearch = function (data, smalls) {
	if (!Array.isArray(data)) return [];
	let Tree = new TreeNode();
	let now;
	smalls.forEach((small, index) => {
		now = Tree;
		for (let i = 0; i < small.length; i++) {
			if (!now.children[small[i]]) {
				now.children[small[i]] = new TreeNode(small[i]);
			}
			now = now.children[small[i]];
		}
		now.children['last'] = index;
	});

	function getData(nowData, nowTree) {
		const res = [];
		for (let i = 0; i < nowData.length; i++) {
			let now = nowTree.children[nowData[i].value];
			if (!now) continue;
			// 终止条件
			if (now.children.last !== undefined) return nowData[i];

			const allowItem = getData(nowData[i].children, now);
			if (!allowItem) continue;
			if (Array.isArray(allowItem) && !allowItem.length) continue;

			nowData[i].children = allowItem;
			res.push(nowData[i]);
		}
		if (res.length) return res;
		return [];
	}
	return getData(data, Tree);
};

const allowData = multiSearch(
	treeData,
	value.map((item) => item.split('$_$'))
);
console.log(JSON.stringify(allowData, null, 2));
