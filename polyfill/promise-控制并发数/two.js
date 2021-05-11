// 实现一个带并发限制的异步调度器scheduler，保证同时运行的任务最多有两个，完善代码
class Scheduler {
	constructor() {
		this.waitingQueue = []; // 待运行的任务
		this.runningQueue = []; // 正在运行的任务
	}

	add(promiseCreator) {
		return new Promise((resolve, reject) => {
			promiseCreator.resolve = resolve;
			if (this.runningQueue.length < 2) {
				this.runTask(promiseCreator);
			} else {
				this.waitingQueue.push(promiseCreator);
			}
		});
	}
	runTask(promiseCreator) {
		this.runningQueue.push(promiseCreator);
		promiseCreator().then((res) => {
			promiseCreator.resolve(res);
			this.removeTask(promiseCreator);
			if (this.waitingQueue.length > 0) {
				this.runTask(this.waitingQueue.shift());
			}
		});
	}

	removeTask(promiseCreator) {
		let index = this.runningQueue.findIndex(promiseCreator);
		this.runningQueue.splice(index, 1);
	}
}

const timeout = (time) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

const scheduler = new Scheduler();

const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);
