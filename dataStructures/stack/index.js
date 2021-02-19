/**
 * 数组模拟栈
 * LeetCode 的题目 “设计一个支持增量操作的栈” 
 * https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * / 
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize){
      console.log('长度：', this.stack.length);
      this.stack.push(x);
      console.log('---', this.stack);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length === 0) return -1;
    return this.stack.pop();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let len = this.stack.length;
    if (len <= k) {
        this.stack = this.stack.map(item => item + val);
    } else {
        for (let i = 0; i < k; i++) {
            this.stack[i] += val;
        }
    }
    console.log(this.stack);
};

let customStack = new CustomStack(3);
customStack.push(1);                          // 栈变为 [1]
customStack.push(2);                          // 栈变为 [1, 2]
customStack.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]
console.log(customStack);
customStack.push(2);                          // 栈变为 [1, 2]
customStack.push(3);                          // 栈变为 [1, 2, 3]
customStack.push(4);
customStack.push(5);
customStack.increment(5, 100);
customStack.increment(2, 100);
customStack.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]
console.log(customStack);
customStack.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]
console.log(customStack);
console.log(customStack.pop());
console.log(customStack.pop(), customStack);