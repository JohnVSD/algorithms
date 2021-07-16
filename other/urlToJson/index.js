'use strict';

// 字符串解析，要求
// 相同 key 的多个值用数组封装
// 如果能用 JSON 解析则作为 json 对象
// 没有value，赋值false的boolean值
// 需要转义
// input: name=adam&name=bob&obj={a:1,b:2}&use&encodeStr=%20
// output:
// {
//   name: ['adam', 'bob'],
//   obj: {a:1, b:2},
//   use: false,
//   encodeStr: ' '
// }

// 1、那个use在字符串里没有值，需要自己添加 false 的布尔值，然后相同的 name 键名，要合并 adam 和 bob
// 2、%20这种做了base64编码的，需要转换成字符串
// 3、还有{}大括号的，要解析成对象
// 4、就是针对给的4个case，4种处理，不是简单的字符串转json的，所以不能用eval
function queryString(str) {
  const strList = decodeURI(str).split('&');
  const hashList = {};

  strList.forEach(item => {
    if (item.includes('=')) {
      const [ key, val = '' ] = item.split('=');

      if (/{.*}/.test(val)) {
        // {a: 1, b: 2} 转为 对象
        hashList[key] = getObject(val);
      } else if (hashList[key]) {
        let oldVal = hashList[key].split();
        oldVal.push(val);
        hashList[key] = oldVal;
      } else {
        hashList[key] = val;
      }
    } 
    
    if (!item.includes('=')) hashList[item] = false;
  })

  return hashList;
}

// 只兼容了一层对象结构，还可以进行递归深度兼容
function getObject(val) {
  // todo 简版：适配多级对象
  return JSON.parse(val.replace(/\w/g, v => `"${v}"`))

  // todo 复杂版：适配多级对象时出现问题 
  // val = {a: 1, b: 2}
  // const str = val.replace(/[\{\}]/g, '');
  // console.log('大括号取出：', val, str);
  
  // const strList = str.split(',');
  // const res = {};
  // strList.forEach(item => {
  //   const [ key, val ] = item.split(':');

  //   if (/{.*}/.test(val)) {
  //     res[key] = getObject(val);
  //   } else {
  //     res[key] = val;
  //   }
  // })
  // return res;
}
const input = 'name=adam&name=bob&obj={a:1,b:2,c:{e:2}}&use&encodeStr=%20';
console.log(queryString(input));