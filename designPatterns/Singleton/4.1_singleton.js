// 标准的单例模式
var Singleton = function(name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function() {
  console.log('===》当前 name：', this.name);
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }

  return this.instance;
}

var objA = Singleton.getInstance('第一');
var objB = Singleton.getInstance('第二');
objA.getName();
objB.getName();
console.log(objA === objB);