import LinkedList from './linkedList';

// 测试链表
const list = new LinkedList();
console.log('push 前：', list);
list.push(15);
list.push(10);
list.push(4);
console.log('push 后：', list);
list.removeAt(1);
console.log('remove 后：', list);