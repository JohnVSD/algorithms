// js 判断对象是数组的几种方式

const list = [1, 2, 3, 4];

// todo 1、利用 instanceof 是否由数组构造而成
console.log(list instanceof Object);
console.log(list instanceof Array);

// todo 2、isArray
console.log(Array.isArray(list));

// todo 3、 利用对象构造函数的 constructor 属性
console.log(list.constructor === Array);

// todo 4、Object.prototype.toString.call(a)
console.log(Object.prototype.toString.call(list) === '[object Array]');

// todo 5、isPrototypeOf
console.log(Array.prototype.isPrototypeOf(list));