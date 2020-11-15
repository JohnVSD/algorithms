/**
 * 转义、特殊字符 
 * * 使用反斜杠 "\" 来进行匹配
 * * 特殊字符：[ \ ^ $ . | ? * + ( ) 不用死记硬背
 * todo Summary
 * todo 1、要在字面（意义）上搜索特殊字符 [ \ ^ $ . | ? * + ( )，我们需要在它们前面加上反斜杠 \（“转义它们”）。
 * todo 2、如果我们在 /.../ 内部（但不在 new RegExp 内部），还需要转义 /。
 * todo 3、传递一个字符串（参数）给 new RegExp 时，我们需要双倍反斜杠 \\，因为字符串引号会消费其中的一个。
 */
{
  // "\."
  console.log('Chrome 5.2'.match(/\d\.\d/)); // 5.2
  
  // "\(" & "\)"
  console.log('Chrome g()'.match(/g\(\)/)); // g()

  /**
   * 匹配反斜杠 \ , 就应该用两个反斜杠来查找 "\\"
   * todo 注：不同宿主环境匹配结果不一致，node会输出 "\\"，而浏览器会输出 "\"
   */ 
  console.log("1\\2".match(/\\/)); // \
}