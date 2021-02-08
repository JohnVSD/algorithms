/**
 * * 链表类 LinkedList
 * 链表中的元素在内存中并不是连续放置的，
 * 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
 */
class LinkedNode<T> {
  constructor(
    public element: T,
    public next?: LinkedNode<T>
  ) { }
}

type IequalsFunction<T> = (a: T, b: T) => boolean;

function equals<T>(a: T, b: T): boolean {
  return a === b;
}

export default class LinedList<T>{
  protected count: number = 0;
  protected head: LinkedNode<T> | undefined;

  constructor(protected equalsFn: IequalsFunction<T> = equals) { }

  // * 向链表尾部添加一个新元素 
  push(element: T) {
    const Node = new LinkedNode(element);
    let current;
    // 链表为空，添加的是第一个元素
    if (this.head == null) { // 与 (this.head === undefined || head === null) 等价
      this.head = Node;
    } else {
      // 链表不为空，向其追加元素
      current = this.head;
      while (current.next != null) { // 获得最后一项； 和(current.next !== undefined && current.next !== null)等价
        current = current.next;
      }
      // 将其 next 赋为新元素，建立连接
      current.next = Node;
    }

    this.count++;
  }

  // * 向链表的特定位置插入一个新元素
  insert(element, position) {

  }

  // 返回链表中特定位置的元素，如果不存在则返回 undefined.
  getElementAt(index) {

  }

  // 从链表中移除一个元素
  remove(element) {

  }

  // 返回元素在链表中的索引，如果没有则返回 -1
  indexOf(element) {

  }

  // *从链表的特定位置移除一个元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        // 场景1：移除第一个元素
        this.head = current.next;
      } else {
        // 场景2：移除第一个元素之外的其他元素
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        // 将 privious 与 current 的下一项连接起来：跳过 current，从而移除它
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }
    return undefined;
  }

  // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false
  isEmpty() {

  }

  // 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {

  }

  /**
   * 返回表示整个链表的字符串。由于列表项使用了 LinkedNode 类，就需要重写继
   * 承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
   */
  toString() {

  }
}