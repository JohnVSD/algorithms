/**
 * * 实现带有 cancel 行为的 promise
 * cancel回调行为时，需要考虑 4 种情况：
 * ? 1.cancel在有任何东西要清理之前立即调用。（如果你完全启动了底层效果，请确保立即取消并清理它。）
 * ? 2.cancel在执行过程中被调用。（清理效果。考虑拒绝或解决承诺，或者如果它适合您的用例，则使其处于不完整状态）
 * ? 3.cancel在 promise 完成、拒绝或解决后调用。（没做什么）。
 * ? 4.cancel在执行过程中的任何一点被多次调用。（后续调用不应执行任何操作。）
 */

function startCountingForHideAndSeek() {
	// State for managing cleanup and cancelling
	let finished = false;
	let cancel = () => (finished = true);

	const promise = new Promise((resolve, reject) => {
		//
		// Custom Promise Logic
		//
		// NOTE: This countdown not finish in exactly 10 seconds, don't build timers this way!
		// (this is as reliable as a child counting during hide-and-seek... :) )
		// Good explanation can be found here: https://medium.com/javascript-in-plain-english/usetime-react-hook-f57979338de
		let counts = 0;
		const id = setInterval(() => {
			counts += 1;
			console.log(counts);
			if (counts === 10) {
				// Happy-path scenario
				console.log('Ready or not, here I come!');
				clearInterval(id);
				resolve();
			}
		}, 1000);

		// When consumer calls `cancel`:
		cancel = () => {
			// In case the promise has already resolved/rejected, don't run cancel behavior!
			if (finished) {
				return;
			}

			// Cancel-path scenario
			console.log("OK, I'll stop counting.");
			clearInterval(id);
			reject();
		};

		// If was cancelled before promise was launched, trigger cancel logic
		if (finished) {
			// (to avoid duplication, just calling `cancel`)
			cancel();
		}
	})
		// After any scenario, set `finished = true` so cancelling has no effect
		.then((resolvedValue) => {
			finished = true;
			return resolvedValue;
		})
		.catch((err) => {
			finished = true;
			return err;
		});

	// ES6 Promises do not have a built-in mechanism for cancelling promises.
	// To support that feature, you need to provide the cancel callback
	// and consider the possible timings:
	// - cancelled before promise execution
	// - cancelled during promise execution
	// - cancelled after promise execution
	// - cancel requested multiple times
	return { promise, cancel };
}

const after = startCountingForHideAndSeek();
after.promise.then(() => console.log('Promise resolved.'));
after.promise.catch(() => console.error('Promise rejected!'));
// Let the counting finish (10 seconds)
after.cancel();
