/**
 * 请实现一个函数 print(msg)，效果是将msg打印出来，
 * 但打印效果每秒内最多触发一次，多余的调用将被忽略。
 * 例如下面的代码：1 和 4 会被打印出来，2 和 3不会被打印。 
 * 
 * * 例：
 * * print(1)
 * * print(2)
 * * print(3)
 * * setTimeout(() => {
 * *    print(4)
 * * }, 2000);
 */ 

const debounce = (fn) => {
  let timer = null;
  
  return function (val) {
    clearTimeout(timer);
    timer = setTimeout((val) => {
      fn.apply(this, arguments);
    }, 1000);
  }
}

const print = debounce((val) => {
  console.log(val);
});

print(1)
print(2)
print(3)

setTimeout(() => {
  print(4)
}, 2000)