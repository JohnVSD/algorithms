/**
 * * 正则表达式 之 Unicode
 * * 修饰符 u 提供对 Unicode 的支持
 * * \p{...} 查找具有某种属性的字符；
 * * \p{Letter} 表示任何语言中的一个字母。也可以使用 \p{L} 
 * ? https://zh.javascript.info/regexp-unicode
 */
{
  var str = 'A ბ ㄱ';
  console.log('有修饰符 u:', str.match(/\p{L}/gu)); // A ბ ㄱ
  console.log('无修饰符：', str.match(/\p{L}/g)); // null (没有匹配的项因为没有加修饰符 "u")
}

/**
 * 实例：16进制数字；
 * * \p{Hex_Digit}
 */
{
  let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
  console.log('输出一个16进制数字：', 'number: xAF'.match(regexp)); // xAF
}

/**
 * 实例：中文字符
 * * 有一个 unicode 属性 Script（一个书写系统）写法：sc=<value>
 * 属性的完整值列表 https://en.wikipedia.org/wiki/Script_(Unicode)
 *    例：Han(中文)、Cyrillic，Greek，Arabic...
 */

{
  let regexp = /\p{sc=Han}/gu;
  let str = 'Hello Привет 你好 123_456';
  console.log('输出一个中文字符：', str.match(regexp));
}

/**
 * 实例：货币
 * unicode 属性 |p{Currency_Symbol} 缩写为 \p{Sc}
 *    例：$，€，¥
 */
{
  let regexp = /\p{Sc}\d/gu; // \d （digit）字符类，表示数字
  let str = `Prices: $2, €1, ¥9`;
  console.log('输出一个货币类型字符串：', str.match(regexp));
}