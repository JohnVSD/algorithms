/**
 * * 正则表达式 "捕获组" 练习 https://zh.javascript.info/regexp-groups
 * ? 重点 “(...)” 括号内称为 “捕获组”
 * todo 1 这允许将匹配的一部分作为结果数组中的单独项。
 * todo 2 如果我们将量词放在括号后，则它将括号视为一个整体。
 */

/**
 *  todo 1 将 {} 分别替换为 <span></span>
 *  ? 知识点：“.*？” 指任何内容
 */
var str = '123{456}789{标签}';
var formatStr = str.replace(/\{(.*?)\}/g, (match, key) => {
	console.log(match, key);
	return `<span>${key}</span>`;
});
console.log('最终结果：', formatStr);

/**
 * todo 2 将公式中的字段全部用 SUM() 进行包裹
 * ? 知识点："/w" 字符类等同于 “[a-zA-Z0-9_]”
 */
let str = '(3day_num + nihao123) / nouse0';
let res = str.replace(/(\w+)/g, function ($1) {
	console.log($1);
	return `SUM(${$1})`;
});
console.log(res);
