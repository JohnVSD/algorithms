/**
 * todo 实现一个 mySetInterval 函数：mySetInterval(fn, a, b);
 * * 首次执行是 a 时间，之后每次间隔 a+b、a+2b、a+nb...
 * 头条原题
 */

// ?由题目可得知执行时间公式为：dealy = a + n * b
function mySetInterval(fn, a, b) {
	this.a = a;
	this.b = b;
	this.num = 0;
	this.timer = null;

	this.start = () => {
		this.timer = setTimeout(() => {
			fn();
			console.log(
				`--间隔--${this.a} + ${this.num} * ${this.b} = ${
					this.a + this.num * this.b
				}`
			);
			this.num++;
			this.start();
		}, this.a + this.num * this.b);
	};

	this.stop = () => {
		this.num = 0;
		clearTimeout(this.timer);
	};
}

let a = new mySetInterval(
	() => {
		console.log(123);
	},
	1000,
	2000
);
a.start();
setTimeout(() => {
	a.stop();
}, 10000);
