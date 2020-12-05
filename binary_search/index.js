const list = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11];

/**
 * 二分查找
 * 列表必须是有序的；每次都从符合条件的结果中间开始查找；
 * 时间复杂度 O(log n)
 */ 
function binarySearch(arry, num) {
  let low = 0;
  let high = arry.length - 1;
  let count = 0;

  while (low <= high) {
    count ++;
    // 中间索引
    let mid = parseInt((low + high) / 2);
    // 中间数 parseInt() 想下取整
    let midNum = arry[mid];
    if (midNum === num) {
      return `找到了，查询${count}次，位置：${mid}`;
    } else if (midNum > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch(list, 9));