
/**
 * 替换字符串
 * 将 {} 分别替换为 <span></span>
 * * 正则表达式 "捕获组" https://zh.javascript.info/regexp-groups
 */ 
var str = '123{456}789{标签}';
var formatStr = str.replace(/\{(.*?)\}/g, (match, key) => {
  console.log(match, key);
  return `<span>${key}</span>`
});
console.log('最终结果：', formatStr);