/**
 * 1381. 设计一个支持增量操作的栈
 * https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * 使用数组模拟栈
 */ 
class CustomStack {
  maxSize: number;
  stack: any[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = new Array();
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
    return -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < this.stack.length; i++) {
      if (i < k) {
        this.stack[i] = this.stack[i] + val;
      }
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */