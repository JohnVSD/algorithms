// 采用代理模式实现单例，将单例语法与业务逻辑拆分

var CreateDiv = function(html) {
  this.html = html;
  this.init();
}

CreateDiv.prototype.init = function () {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
}

// 代理模式，将单例逻辑单独抽离
var ProxySingletonCreateDiv = (function() {
  var instance = null;

  return function(html) {
    if (!instance) {
      return instance = new CreateDiv();
    }
    return instance;
  }
})()

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');
console.log(a === b);
