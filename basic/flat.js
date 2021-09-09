// 铺平数组
const arr = [1, [2, [3, [4, 5]]], 6];

// todo 1、利用 ES6 数组方法 flat，简单直接
console.log('方法一：', arr.flat(Infinity));

// todo 2、利用正则，但是数组元素都会变为字符串
console.log('方法二：', JSON.stringify(arr).replace(/\[|]/g, '').split(','))

// todo 3、正则改良版
console.log('方法三：', JSON.parse('['+ JSON.stringify(arr).replace(/\[|]/g, '') +']'))

// todo 4、利用 reduce
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const newArr = flatten(arr);
console.log('方法四：', newArr);

// todo 5、函数递归，其实和 reduce 本质一样
const newArr = [];
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    Array.isArray(item) ? flatten(item) : newArr.push(item);
  }
}
fn(arr);
console.log('方法五：', newArr);