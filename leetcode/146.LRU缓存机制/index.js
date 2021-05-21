/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

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

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
