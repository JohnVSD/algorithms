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
        clearTimeout(timer);
        _func(executeFn);
      }, interval);
    }
  } 

  return _func(func);
}

retry(() => {
  setTimeout(() => {
    return console.log('正确了');
  }, 3000);
  // throw new Error('报错');
}, 5, 2000);