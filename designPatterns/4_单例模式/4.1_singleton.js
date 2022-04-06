// todo 1、标准的单例模式
// var Singleton = function(name) {
//   this.name = name;
//   this.instance = null;
// }

// Singleton.prototype.getName = function() {
//   console.log('===》当前 name：', this.name);
// }

// Singleton.getInstance = function(name) {
//   if (!this.instance) {
//     this.instance = new Singleton(name);
//   }

//   return this.instance;
// }

// todo 2、使用 ES6 语法实现
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

  getName() {
    return this.name;
  }

  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }

    return this.instance
  }
}

// 调用
var objA = Singleton.getInstance('第一');
var objB = Singleton.getInstance('第二');
console.log(objA.getName())
console.log(objB.getName())
console.log(objA === objB);