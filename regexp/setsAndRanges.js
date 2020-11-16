/**
 * 集合和范围 [...]
 * * 方括号 [...] 中的字符或者字符类意味着 “搜索给定的字符中的任意一个”。
 * https://zh.javascript.info/regexp-character-sets-and-ranges
 */

// 集合
{
  // 表示查找 [m 或 t]，然后再匹配 op
  console.log('Mop top'.match(/[mt]op/gi)); // [ 'Mop', 'Top' ]

  // ! 只能匹配一个，不是很理解？
  console.log('Voila Voila'.match(/V[oi]la/g)); // null
}

{
  let reg = /\.{3,}/g;
  console.log("Hello!... How goes?.....".match(reg))
}

{
  let reg = /#[0-9a-f]{6}\b/gi;
  let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
  console.log(str.match(reg))  // #121212,#AA00ef
}