import LinkedList from './linkedList';

// 测试链表
const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list, list.next);

// 寻找链表中心节点；（快慢指针）
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
let resList = middleNode(list);
console.log(resList);