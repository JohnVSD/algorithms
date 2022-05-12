'use strict';

// 全量数据
const treeData = [
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
					{
						label: '英语',
						value: '英语',
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
					{
						label: '英语',
						value: '英语',
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
					{
						label: '英语',
						value: '英语',
						children: [],
					},
				],
			},
			{
				label: '高二',
				value: '高二',
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
					{
						label: '英语',
						value: '英语',
						children: [],
					},
				],
			},
		],
	},
];

// 已有权限
const permissions = ['初中$_$初一$_$语文'];

function deepTree(tree, str = '') {
	return tree
		.map((node) => ({ ...node }))
		.filter((node) => {
			// str = '';
			if (node.children.length) {
				str = str === '' ? node.label + '$_$' + str : str + node.label;
				node.children = deepTree(node.children, str);
			}
			str = str + '$_$' + node.label;
			console.log('最后一层：', str);
			return true;
		});
}

function treeForeach(tree, preText, func) {
	tree.forEach((node) => {
		node.text =
			preText === '' ? node.label + '$_$' : preText + node.label + '$_$';
		func(node, node.text);
		node.children.length && treeForeach(node.children, node.text, func);
	});
}

treeForeach(treeData, '', (node, str) => {
	str = str.substring(0, str.length - 3);
	console.log('遍历：', str);
});

console.log('--->', JSON.stringify(treeData));
