/**
 * 虚拟代理合并 http 请求
 */

// 同步函数
var synchronousFile = function(id) {
  console.log('开始同步文件：', id);
}

// 基础版本，未合并请求
// var checkbox = document.getElementsByTagName('input');
// for (var i = 0, c; c = checkbox[i++];) {
//   // 等同 for (var i = 0, c = checkbox.length; i < c; i++) 
//   c.onclick = function() {
//     if(this.checked) {
//       synchronousFile(this.id);
//     }
//   }
// }

/**
 * TODO 优化版，使用代理函数收集一段时间的请求，然后一起发送。
 * 对实时性要求不是非常高的系统其实都可以接受，这可以节省大量的网络请求，减少服务器压力
 */ 
var proxySynchronousFile = (function() {
  var cache = [], timer;

  return function(id) {
    cache.push(id);
    if (timer) return;
    
    timer = setTimeout(function() {
      synchronousFile(cache.join(','));
      clearTimeout(timer);
      timer = null;
      cache.length = 0;
    }, 2000)
  }
})()

var checkbox = document.getElementsByTagName('input');
for (var i = 0, c; c = checkbox[i++];) {
  // 等同 for (var i = 0, c = checkbox.length; i < c; i++) 
  c.onclick = function() {
    if(this.checked) {
      proxySynchronousFile(this.id);
    }
  }
}