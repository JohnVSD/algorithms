/**
 * 对数组做去重
 * @example
 * [1,'1',1] -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}] -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}] 
 */ 

var uniqueArray = function(array) {
    // 1 判断是否是数组
    if (!array.length) return [];

    let map = new Map();
    array.forEach(item => {
      if (!map.has(item)) {
        let key = item;
        if (typeof item === 'object') {
          let temp = {};
          Object.keys(item).sort().map(k => {
            temp[k] = item[k]
          })
          key = JSON.stringify(temp);
        }
        map.set(key, item);
      }
    })
    return [...map.values()]
}
// console.log(111, uniqueArray([1, '1', 1]));
console.log(111, uniqueArray([{a: 1}, {b: 1}, {a: 1}]));