/**
 * 虚拟代理合并 http 请求
 */

// 同步函数
var synchronousFile = function(id) {
  console.log('开始同步文件：', id);
}

// 基础版本，未合并请求
var checkbox = document.getElementsByTagName('input');
for (var i = 0, c; c = checkbox[i++];) {
  // 等同 for (var i = 0, c = checkbox.length; i < c; i++) 
  c.onclick = function() {
    console.log(this.checked)
    if(this.checked) {
      synchronousFile(this.id);
    }
  }
}