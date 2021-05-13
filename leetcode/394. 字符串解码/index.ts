/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 */

/**
 * todo 方法一：利用数据结构 栈 来进行操作
 * 遍历字符串，在遇到闭合符号 ']' 之前一直进行入栈操作 --> 直到遇到 ‘]’便进行出栈操作 --> 创建变量存储 “需要重复的字符” 和 “重复次数” 
 * 内部使用 while 循环进行逐个判断与出栈
 */ 
function decodeString(s: string): string {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // 遇到 ']' 就出栈
    if (s[i] === ']') {
      let repeatStr = ''; // 记录需要重复的字符
      let num = ''; // 记录数字

      // 将需要重复的字符进行存储
      while (stack[stack.length - 1] !== '[') {
        repeatStr = stack.pop() + repeatStr;
      }
      // 去除 '['
      stack.pop();

      // 取出数字
      while (!isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }

      // 重复 num 次 repeatStr
      repeatStr = repeatStr.repeat(parseInt(num));
      stack.push(repeatStr)
    } else {
      // 值不等于 ']' 就入栈
      stack.push(s[i]);
    }
  }
  
  return stack.join('');
};

let str = '3[a2[c]]';
console.log(decodeString(str));