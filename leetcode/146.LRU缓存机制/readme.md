## 题目
[146. LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

## 思路

* 根据题目要求，存储的数据需要保证顺序关系：数组、链表等
* 需要对数据进行频繁的增删，时间复杂度为 O(1) 可使用链表
* 需要保证数据的读取时间复杂度为O(1)，可用哈希表实现
* 最终方案：双向链表 + 哈希表
 
## 代码 (JS)

```JavaScript
// ListNode
function ListNode(key, val) {
	this.key = key;
	this.val = val;
	this.pre = null;
	this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.capacity = capacity;
	this.size = 0;
	this.hashList = new Map();

	this.head = new ListNode();
	this.tail = new ListNode();
	this.head.next = this.tail;
	this.tail.pre = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.hashList.has(key)) {
		let node = this.hashList.get(key);

		this.removeNode(node);
		this.appendHead(node);

		return node.val;
	} else {
		return -1;
	}
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	// 判断 key 是否存在
	if (this.hashList.has(key)) {
		// 如果存在则更新其数据并移至第一个节点
		let node = this.hashList.get(key);
		this.removeNode(node);
		node.val = value;
		this.appendHead(node);
	} else {
		// 如果不存在则进行新增
		let node = new ListNode(key, value);
		this.hashList.set(key, node);

		if (this.size < this.capacity) {
			// 容量未超出则 size+1
			this.size++;
		} else {
			// 容量超出则移除尾结点
			let tailKey = this.removeTail();
			this.hashList.delete(tailKey);
		}

		this.appendHead(node);
	}
};

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.removeNode = function (node) {
	let preNode = node.pre;
	let nextNode = node.next;
	preNode.next = nextNode;
	nextNode.pre = preNode;
};

/**
 * @return {any}
 */
LRUCache.prototype.removeTail = function () {
	let key = this.tail.pre.key;
	this.removeNode(this.tail.pre);
	return key;
};

/**
 * @param {ListNode} node
 * @return {void}
 */
LRUCache.prototype.appendHead = function (node) {
	let firstNode = this.head.next;

	this.head.next = node;
	node.pre = this.head;

	node.next = firstNode;
	firstNode.pre = node;
};
```

## 复杂度分析

* 时间复杂度：get、put 分别 O(1)
* 空间复杂度：O(n)