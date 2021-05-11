// 二维数组查找
var nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 最简单的利用 for 循环
function isInclude(arr, target) {
  return arr.some(item => item.includes(target));
};

var target = 11;

console.log(`是否包含${target}：`, isInclude(nums, target));