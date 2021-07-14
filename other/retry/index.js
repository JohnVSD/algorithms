/**
 * 实现 retry(func, times, interval)，
 * 如果func失败了，会在 interval 后重试，最大重试次数 times（func可能是异步）
 */

function retry(func, times, interval) {
  let retryTimes = 0;
  
  const _func = async (executeFn) => {
    try {
      await executeFn();
    } catch (error) {
      retryTimes++;
  
      if (retryTimes > times) return console.log('请求超时...');
      
      console.log(`请求失败，重试中...${retryTimes}/${times}，耗时 ${interval}`);
      let timer = setTimeout(() => {
        timer = null;
        _func(executeFn);
      }, interval);
    }
  } 

  _func(func);
}

retry(null, 5, 2000);