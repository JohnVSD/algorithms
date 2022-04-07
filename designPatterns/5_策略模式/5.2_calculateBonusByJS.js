/**
 * 5.2 JS版本的策略模式
 * 重点是策略模式的思想（将不同算法进行逐个封装，并且可以相互替换），没必要非要效仿去写一个冗长的类去实现
 */ 

// 定义不同绩效计算规则
const strategies = {
  'S': function ( salary ) {
    return salary * 4
  },
  'A': function ( salary ) {
    return salary * 3
  },
  'B': function ( salary ) {
    return salary * 2
  }
}

// 计算奖金
const calculateBonus = function (level, salary) {
  return strategies[level]( salary )
}
console.log( calculateBonus( 'S', 20000 ) );
console.log( calculateBonus( 'A', 20000 ) );