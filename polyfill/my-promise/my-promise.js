/**
 * 实现一个 符合 Promise A+ 规范的 Promise
 */

// 定义全局状态
const PENDDING = 'pendding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
	constructor(executor) {
		// executor是一个执行器，进入会立即执行
		executor(this.resolve, this.reject);
	}

	status = PENDDING;
	value = null; // 成功内容
	reason = null; // 失败原因

	// onFulfilledCallback = null;
	// onRejectedCallback = null;
	onFulfilledCallbacks = [];
	onRejectedCallbacks = [];

	// resolve和reject使用箭头函数是为了防止 this 指向全局
	resolve = (res) => {
		// 判断状态
		if (this.status === PENDDING) {
			// 修改成功状态
			this.status = FULFILLED;
			// 设置成功值
			this.value = res;
			// 循环调用
			while (this.onFulfilledCallbacks.length) {
				this.onFulfilledCallbacks.shift()(res);
			}
		}
	};

	reject = (err) => {
		if (this.status === PENDDING) {
			// 修改失败状态
			this.status = REJECTED;
			// 设置失败值
			this.reason = err;

			// 判断失败回调是否存在，存在就直接调用
			while (this.onRejectedCallbacks.length) {
				this.onRejectedCallbacks.shift()(err);
			}
		}
	};

	then(onFulFilled, onRejected) {
		const promise2 = new MyPromise((resolve, reject) => {
			if (this.status === FULFILLED) {
				// 调用成功回调，并把成功值返回
				const x = onFulFilled(this.value);
				resolvePromise(x, resolve, reject);
			} else if (this.status === REJECTED) {
				// 调用失败回调，并把失败原因返回
				onRejected(this.reason);
			} else if (this.status === PENDDING) {
				// 判断如果是pendding状态先将回调函数存起来
				this.onFulfilledCallbacks.push(onFulFilled);
				this.onRejectedCallbacks.push(onRejected);
			}
		});

		return promise2;
	}
}

function resolvePromise(x, resolve, reject) {
	if (x instanceof MyPromise) {
		x.then(resolve, reject);
	} else {
		resolve(x);
	}
}

module.exports = MyPromise;
