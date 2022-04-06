/**
 * 5.1 使用策略模式计算奖金 
 */ 

// 定义不同绩效计算规则
const performanceS = function() {};
performanceS.prototype.calculate = function ( salary ) {
  return salary * 4
}

const performanceA = function() {};
performanceA.prototype.calculate = function ( salary ) {
  return salary * 3
}

const performanceB = function() {};
performanceB.prototype.calculate = function ( salary ) {
  return salary * 2
}

// 定义奖金类
const Bonus = function() {
  this.salary = null;
  this.strategy = null;
};

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
}

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
}

Bonus.prototype.getBonus = function() {
  return this.strategy.calculate(this.salary)
}

// 使用
var bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS());
console.log('S 级别：', bonus.getBonus());

bonus.setStrategy(new performanceA());
console.log('A 级别：', bonus.getBonus());